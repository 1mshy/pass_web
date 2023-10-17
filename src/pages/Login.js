import { Component } from "react";
import React from "react";
import TextField from '@mui/material/TextField';
import { Button, ThemeProvider, createTheme } from "@mui/material";
import "../css/login.css"
import penguin from "../pics/penguin-corner.jpg"
import kyra from "../pics/IMG_7461.jpg"

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
    palette: {
        anger: createColor('#F40B27'),
        apple: createColor('#5DBA40'),
        steelBlue: createColor('#5C76B7'),
        violet: createColor('#BC00A3'),
    },
});

class Login extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className="login">
                    <header className="login-header">
                        <h1>Login</h1>
                    </header>

                    <div className="login-body">
                        <div className="login-form">
                            <div className="username">
                                <TextField color="violet" variant="filled" type="text" name="username" label="Username" />
                            </div>
                            <div className="password">
                                <TextField color="violet" variant="filled" type="password" name="password" label="Password" />
                            </div>
                            <Button color="violet" >Login</Button>
                        </div>
                        <div className="side-content">
                            <img src={penguin} alt="penguin" />
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}


export default Login;