// pages/index.js
import {Button, Typography, Container, Link} from '@mui/material';

function HomePage() {
    return (
        <Container className='container-styles'>
            <Typography variant="h1" textAlign='center'>Todo App</Typography>
            <Typography>Simple app for organizing your todos</Typography>
            <Link href="/login"><Button variant="contained" color="primary">
                Login
            </Button></Link>
            <br/>
            <Link href='/register'>
                <Button variant="text" color="primary">
                    Register
                </Button>
            </Link>
        </Container>
    );
}

export default HomePage;
