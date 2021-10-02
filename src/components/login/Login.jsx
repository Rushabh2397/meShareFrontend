import {useState} from 'react'
import { Button, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import {Link,useHistory} from 'react-router-dom'
import { login } from '../api'
import toaster from 'react-hot-toast'
import Loader from '../loader/Loader'
import validator from 'validator';
import { useAuth } from '../../context/AuthContext'


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
        border:"1px solid black"
    },
    input: {
        marginBottom: '15px'
    },
    loginBtn:{
       background:"blue"
    },
    signup:{
        fontSize:"0.9rem",
        marginTop:"0.5rem"
    },
    err:{
        color: "red",
        margin:0,
        fontSize:"0.8rem"
    }
}));



const Login = () => {
    const classes = useStyles();
    const history = useHistory()
    const {userDispatch} = useAuth()
    const [email, setEmail] = useState({
        email: '',
        err: false,
        errMsg: ''
    });
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const userLogin = async () => {
        try {
            let formValidated = true;
            if (!validator.isEmail(email.email)) {
                formValidated = false
                setEmail({ ...email, err: true, errMsg: 'Email is not valid.' })
            }
            
            if (formValidated) {
                setLoading(true)
                const res = await login({ email: email.email, password: password })
                let userData = {email:res.data.data.email,token:res.data.data.token}
                userDispatch({type:'LOGIN_SUCCESS',payload:userData})
                localStorage.setItem('meShare',JSON.stringify(userData))
                toaster.success(res.data.message,{
                    position:'top-right',
                    duration:1500
                })
                setLoading(false)
                history.push('/home')
            }

        } catch (error) {
            setLoading(false)
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
            setPassword(value)
        }
    }
    return (
        <div className={classes.loginContainer}>
            {/* <Paper className={classes.loginFormContainer}> */}
            <form className={classes.loginForm}>
                <Typography variant="h4">Login</Typography>
                <div className={classes.input}>
                    <label htmlFor="email">Email</label>
                    <input  id="email" type="email" placeholder="Enter email" value={email.email} onChange={(e) => { handleOnChange("email", e.target.value) }} />
                    {email.err ? <span className={classes.err}>{email.errMsg}</span> : ''}
                </div>
                <div className={classes.input}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter Password" onChange={(e) => { handleOnChange("password", e.target.value) }} />
                </div>
                <Button color="primary" size="large" variant="contained" onClick={userLogin} >Login</Button>
                <div className={classes.signup}>
                    <span >Don't have an account ? <Link style={{color:"#3f51b5"}} to="/signup">Signup</Link></span>
                </div>

            </form>
            {/* </Paper> */}
            {loading && <Loader loading={loading} />}
        </div>
    );
}

export default Login