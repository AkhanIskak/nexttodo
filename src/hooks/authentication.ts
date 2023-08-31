import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {whoAmI} from "@/api/auth";

function useAuthentication() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token)
            router.push('/login');
        whoAmI(token as string)
            .then(res => {
                console.log(res)
                if (res.status === 401)
                    router.push('login')
            })
    }, []);
    return;
}

export default useAuthentication;
