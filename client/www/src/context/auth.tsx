import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../service/api";

export const AuthContext = createContext({} as AuthContextData);

type AuthResponse = {
    token: string;
    user: {
        id: string;
        avatar_url: string;
        name: string;
        login: string;
    }
}

type User = {
    id: string;
    name: string;
    login: string;
    avatar_url: string;
};

type AuthContextData = {
    user: User | null;
    signInUrl: string;
    signOut: () => void;
}

type AuthProvider = {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProvider) {

    const [ user, setUser ] = useState<User | null>(null);

    const signinUrl = 'https://github.com/login/oauth/authorize?scope=user&client_id=3bd47da17e47523bcb31'

    async function signinGithub(githubCode: string) {
        //resposta com os dados do user e o token
        const response = await api.post<AuthResponse>('authenticate', {
            code: githubCode
        })

        const { token, user } = response.data;

        localStorage.setItem('@dowhile-vdee:token', token);

        setUser(user);

    }

    function signOut() {
        setUser(null);

        localStorage.removeItem('@dowhile-vdee:token')
    }

    useEffect(() => {
        const url = window.location.href;

        const hasGithubCode = url.includes('?code=');

        if (hasGithubCode) {
            const [urlWithoutCode, githubCode] = url.split('?code=')

            window.history.pushState({}, '', urlWithoutCode);

            signinGithub(githubCode);
        }
    }, [])


    useEffect(() => {

        const token = localStorage.getItem('@dowhile-vdee:token');
       
        if(token){
            api.defaults.headers.common.authorization= `Bearer ${token}` 

            api.get<User>('user/profile').then(response => {
                setUser(response.data)
            })
        }
        

    }, [])

    return (
        <AuthContext.Provider value={{signInUrl:signinUrl, user: user, signOut}}>
            {children}
        </AuthContext.Provider>
    )
};

