import { Button,Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import { Link,useHistory } from 'react-router-dom'
import { registerUser } from '../api'
import toaster from 'react-hot-toast'
import Loader from '../loader/Loader'
import validator from 'validator';


const useStyles = makeStyles((theme) => ({
    loginContainer: {
        display: "flex",
        minHeight: "100vh",
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginFormContainer: {
        width: "350px",
        padding: "10px"
    },
    loginForm: {
        width: "340px",
        padding: "2.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        border: "1px solid black"
    },
    input: {
        marginBottom: '15px'
    },
    loginBtn: {
        background: "blue"
    },
    signup: {
        fontSize: "0.9rem",
        marginTop: "0.5rem"
    },
    err:{
        color: "red",
        margin:0,
        fontSize:"0.8rem"
    }
}));



const Signup = () => {
    const classes = useStyles();
    const history = useHistory()
    const [email, setEmail] = useState({
        email: '',
        err: false,
        errMsg: ''
    });
    const [password, setPassword] = useState({
        password: '',
        err: false,
        errMsg: ''
    });
    const [loading, setLoading] = useState(false)
     

    const register = async () => {
        try {
            let formValidated = true;
            if (!validator.isEmail(email.email)) {
                formValidated = false
                setEmail({ ...email, err: true, errMsg: 'Email is not valid.' })
            }
            if (password.password.length < 6) {
                formValidated = false
                setPassword({ ...password, err: true, errMsg: 'Password legnth mustbe atleast 6' })
            }
            if (formValidated) {
                setLoading(true)
                const res = await registerUser({ email: email.email, password: password.password })
                toaster.success(res.data.message,{
                    position:'top-right',
                    duration:1500
                })
                setLoading(false)
                history.push('/login')
            }

        } catch (error) {
            setLoading(false)
            console.log("error",error)
            toaster.error(error.response.data.message,{
                position:'top-right',
                duration:1500
            })
        }
    }

    const handleOnChange = (key, value) => {
        if (key === 'email') {

            setEmail({ email: value, err: false, errMsg: '' })
        } else {
            setPassword({
                password: value,
                err: false,
                errMsg: ''
            })
        }
    }

    return (
        <div className={classes.loginContainer}>
            {/* <Paper className={classes.loginFormContainer}> */}
            <form className={classes.loginForm}>
                <Typography variant="h4">Signup</Typography>
                <div className={classes.input}>
                    <label htmlFor="email">Email</label>
                    <input  id="email" type="email" placeholder="Enter email" value={email.email} onChange={(e) => { handleOnChange("email", e.target.value) }} />
                    {email.err ? <span className={classes.err}>{email.errMsg}</span> : ''}
                </div>
                <div className={classes.input}>
                    <label htmlFor="password">Password</label>
                    <input  type="password" id="password" placeholder="Enter Password" value={password.password} onChange={(e) => { handleOnChange("password", e.target.value) }} />
                    {password.err ? <span className={classes.err} >{password.errMsg}</span> : ''}
                </div>
                <Button color="primary" size="large" variant="contained" onClick={register} >Signup</Button>
                <div className={classes.signup}>
                    <span>Already have an account? <Link style={{ color: "#3f51b5" }} to="/login">Login</Link></span>
                </div>

            </form>
            {/* </Paper> */}
            {loading && <Loader loading={loading} />}
        </div>
    );
}

export default Signup