
import axios from "axios";
import prismaClient from '../../src/prisma';
import { sign } from 'jsonwebtoken';

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

        //from github
        const { login, avatar_url, id, name } = response.data;

        //if user exists on the db
        let user = await prismaClient.user.findFirst({
            where: {
                github_id: id
            }
        })


        // if not exists on the db: create an user
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

        const token = sign({
            user: {
                name: user.name,
                avatar_url: user.avatar_url,
                id: user.id
            }
        }, 

        "45c17641b9c08d024d1c3825f1c048b26298bc2d",

        {
            subject: user.id,
            expiresIn: "1d"
        }
        )

        return { token, user };

    }
}


export { AuthenticateUserService }