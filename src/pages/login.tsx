import {Container, Typography, Button, Link, TextField} from "@mui/material";
import {useState} from "react";
import {useRouter} from "next/router";
import {loginUser} from "@/api/auth";

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate email before submitting
        if (!email || !password) {
            alert("Please enter a valid email");
            return;
        }
        if (!validateEmail(email)) return
        const response = await loginUser({
            email,
            password,
        });

        if (response.statusCode === 401) {
            alert(response.message);
            return;
        }

        localStorage.setItem("token", response.accessToken);
        await router.push("/todo");
    };

    const validateEmail = (value: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(value);
    };

    return (
        <Container className="container-styles">
            <Typography variant="h4" textAlign="center">
                Login
            </Typography>
            <Link variant="h6" textAlign="center" href="/register">
                Or Register
            </Link>

            <form onSubmit={handleSubmit}>
                <div>
                    <Typography>Email</Typography>
                    <TextField
                        error={!validateEmail(email)}
                        helperText={!validateEmail(email) ? "Invalid email format" : ""}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        fullWidth
                        required
                    />
                </div>
                <div>
                    <Typography>Password</Typography>
                    <TextField
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        fullWidth
                        required
                    />
                </div>
                <div>
                    <Button type="submit" variant="contained">
                        Login
                    </Button>
                </div>
            </form>
        </Container>
    );
}
