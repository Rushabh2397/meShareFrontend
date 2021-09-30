import { Button, Paper, TextField, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'


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
    }
}));



const Signup = () => {
    const classes = useStyles();

    return (
        <div className={classes.loginContainer}>
            {/* <Paper className={classes.loginFormContainer}> */}
            <form className={classes.loginForm}>
                <Typography variant="h4">Signup</Typography>
                <div>
                    <label htmlFor="email">Email</label>
                    <input className={classes.input} id="email" type="email" placeholder="Enter email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input className={classes.input} type="password" id="password" placeholder="Enter Password" />
                </div>
                <Button color="primary" size="large" variant="contained" >Signup</Button>
                <div className={classes.signup}>
                    <sapn >Already have an account? <Link style={{color:"#3f51b5"}} to="/login">Login</Link></sapn>
                </div>

            </form>
            {/* </Paper> */}
        </div>
    );
}

export default Signup