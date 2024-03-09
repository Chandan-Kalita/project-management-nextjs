"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import withRedux from '../../../../components/withStore';
import theme from '../../../../theme';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '../../../../store';
import { getLoggedInStatus } from '../../../../store/selector/user.selector';
import { redirect } from 'next/navigation';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = theme;

export default withRedux(function UserLogin() {
    const dispatch = useDispatch<Dispatch>();
    const loggedIn = useSelector(getLoggedInStatus)
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let data: any = new FormData(event.currentTarget);
        data = { email: data.get('email'), password: data.get('password') };
        dispatch.userStore.login(data)
    };
    React.useEffect(() => {
        if (loggedIn) {
            redirect("/user/")
        }
    }, [loggedIn])
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            InputLabelProps={{shrink:true}}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            InputLabelProps={{shrink:true}}
                            type="password"
                            id="password"
                            autoComplete='current-password'
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/user/register" variant="body2">
                                    {"Already have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
})