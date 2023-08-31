import {Container, Typography, Input, Button, Link} from "@mui/material";
import {useState} from "react";
import {useRouter} from "next/router";
import {registerUser} from "@/api/auth";
export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');


    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (!email || !password)
            alert('Please set email or password')
        e.preventDefault()
        const response = await registerUser({
            email,
            password,
            name,
            surname
        });
        if (response.statusCode === 400) {
            alert(response.message);
            return
        }
        localStorage.setItem('token', response.accessToken)
        await router.push('/')
    }
    return (
        <Container className='container-styles'>
            <Typography variant="h4" textAlign='center'>Register</Typography>
            <Link variant="h6" textAlign='center' href='/login'>Or Login</Link>

            <form onSubmit={handleSubmit}>
                <label>
                    <Typography>Email</Typography>
                    <Input onChange={e => setEmail(e.target.value)}></Input>
                </label>
                <label>
                    <Typography>Password</Typography>
                    <Input onChange={e => setPassword(e.target.value)}></Input>
                </label>
                <label>
                    <Typography>Name</Typography>
                    <Input onChange={e => setName(e.target.value)}></Input>
                </label>
                <label>
                    <Typography>Surname</Typography>
                    <Input onChange={e => setSurname(e.target.value)}></Input>
                </label>
                <div>
                    <Button type="submit" variant='contained'>Register</Button>
                </div>
            </form>
        </Container>
    )
}
