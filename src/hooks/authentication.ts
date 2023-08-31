import { useEffect } from 'react';
import { useRouter } from 'next/router';

function useAuthentication() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token)
            router.push('/login');
    }, []);

    return;
}

export default useAuthentication;
