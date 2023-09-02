import {Container, Typography, Input, Button, Link, TextField} from "@mui/material";
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
        if (!validateEmail(email))
            alert("Please enter a valid email");
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
        await router.push('/todo')
    }
    const validateEmail = (value: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(value);
    };

    return (
        <Container className='container-styles'>
            <Typography variant="h4" textAlign='center'>Register</Typography>
            <Link variant="h6" textAlign='center' href='/login'>Or Login</Link>

            <form onSubmit={handleSubmit}>
                <label>
                    <Typography>Email</Typography>
                    <TextField error={!validateEmail(email)}
                               helperText={!validateEmail(email) ? "Invalid email format" : ""}
                               onChange={e => setEmail(e.target.value)}></TextField>
                </label>
                <label>
                    <Typography>Password</Typography>
                    <TextField onChange={e => setPassword(e.target.value)}></TextField>
                </label>
                <label>
                    <Typography>Name</Typography>
                    <TextField onChange={e => setName(e.target.value)}></TextField>
                </label>
                <label>
                    <Typography>Surname</Typography>
                    <TextField onChange={e => setSurname(e.target.value)}></TextField>
                </label>
                <div>
                    <Button type="submit" variant='contained'>Register</Button>
                </div>
            </form>
        </Container>
    )
}
