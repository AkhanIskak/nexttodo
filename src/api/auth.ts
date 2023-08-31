import {IUserAuth, IUserRegister} from "@/types/user.types";

export async function registerUser(credentials: IUserRegister): Promise<any> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    return response.json();
}

export async function loginUser(credentials: IUserAuth): Promise<any> {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    return response.json();
}

export function whoAmI(token: string) {
    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/whoami`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    })
}
