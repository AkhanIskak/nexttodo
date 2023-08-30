// pages/index.js
import { Button, Typography ,Container} from '@mui/material';
import {textAlign} from "@mui/system";

function HomePage() {
    const containerStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <Container style={{alignItems:"center",justifyContent:"center",display:'flex',flexDirection:"column"}}>
            <Typography variant="h1" textAlign='center'>Todo App</Typography>
                <Typography>Simple app for organizing your todos</Typography>
                <Button variant="contained" color="primary">
                    Login
                </Button>
                <br/>
                <Button variant="text" color="primary">
                    Register
                </Button>
        </Container>
    );
}

export default HomePage;
