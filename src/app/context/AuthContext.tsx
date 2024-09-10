import { createContext, ReactNode, useState } from "react";
import { destroyCookie, setCookie } from "nookies";
import Router from "next/router";
import { api } from "../../services/apiClient";

interface AuthContextData {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
}

interface UserProps {
    id: string;
    name: string;
    email: string;
    adress: string | null;
    subscriptions?: SubscriptionProps | null;
}

interface SubscriptionProps {
    id: string;
    status: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

interface SignInProps {
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function SignOut() {
    console.log("error logout")
    try{
        destroyCookie(null, "@barber.token", {path: "/"});
        Router.push("/login");
    }catch(err){
        console.log("error logout")

    }
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>();

    const isAuthenticated = !!user;

    async function signIn({ email, password }: SignInProps) {
        try {
            const response = await api.post("/session", {
                email,
                password,
            });

            const { id, name, token, subscriptions, adress } = response.data;

            setCookie(undefined, "@barber.token", token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: "/",
            })

            setUser({
                id,
                name,
                email,
                adress,
                subscriptions
            });

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            Router.push("/dashboard");

        } catch (err) {
            console.log("Errooooou fdp", err)
        }

    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    );
}