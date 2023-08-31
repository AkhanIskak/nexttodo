import {Container, Typography, Input, Button, Link} from "@mui/material";
import {useState} from "react";
import {useRouter} from "next/router";
import {loginUser} from "@/api/auth";


export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (!email || !password)
            alert('Please set email or password')
        e.preventDefault()
        const response = await loginUser({
            email,
            password
        });
        if(response.statusCode===401) {
            alert(response.message);
            return
        }
        localStorage.setItem('token',response.accessToken)
        await router.push('/todo')
    }
    return (
        <Container className='container-styles'>
            <Typography variant="h4" textAlign='center'>Login</Typography>
            <Link variant="h6" textAlign='center' href='/register'>Or Register</Link>

            <form onSubmit={handleSubmit}>
                <label>
                    <Typography>Email</Typography>
                    <Input onChange={e => setEmail(e.target.value)}></Input>
                </label>
                <label>
                    <Typography>Password</Typography>
                    <Input onChange={e => setPassword(e.target.value)}></Input>
                </label>
                <div>
                    <Button type="submit" variant='contained'>Login</Button>
                </div>
            </form>
        </Container>
    )
}
