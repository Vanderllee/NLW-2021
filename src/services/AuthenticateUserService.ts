
import axios from "axios";
import prismaClient from '../../src/prisma';

type AccessTokenResponse = {
    access_token: string
}

type UserResponse = {
    avatar_url: string;
    login: string;
    id: number;
    name: string;
}

class AuthenticateUserService {

    async execute(code: string) {
        const url = 'https://github.com/login/oauth/access_token';

        const { data: accessTokenResponse } = await axios.post<AccessTokenResponse>(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code
            },
            headers: {
                "Accept": "application/json"
            }
        })

        const response = await axios.get<UserResponse>('https://api.github.com/user', {
            headers: {
                authorization: `Bearer ${ accessTokenResponse.access_token }`
            }
        })

        const { login, avatar_url, id, name } = response.data;


        let user = await prismaClient.user.findFirst({
            where: {
                github_id: id
            }
        })

        if(!user) {
          user =  await prismaClient.user.create({
                data: {
                    login,
                    avatar_url,
                    github_id: id,
                    name,
                }
            })
        }

        return response.data;

    }
}


export { AuthenticateUserService }