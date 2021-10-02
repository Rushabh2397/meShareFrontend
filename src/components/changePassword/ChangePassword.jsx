import { useState } from 'react'
import { Button, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import {  useHistory } from 'react-router-dom'
import  { toast } from 'react-hot-toast'
import Loader from '../loader/Loader'
import { updateUserPassword } from '../api'


const useStyles = makeStyles((theme) => ({
    changePasswordContainer: {
        display: "flex",
        minHeight: "100vh",
        justifyContent: 'center',
        alignItems: 'center'
    },
    changePasswordForm: {
        width: "320px",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        border: "1px solid black"
    },
    input: {
        marginBottom: '15px'
    },
    err: {
        color: "red",
        margin: 0,
        fontSize: "0.8rem"
    }
}));




const ChangePassword = () => {
    const classes = useStyles();
    const history = useHistory();
    const [loading, setLoading] = useState(false)
    const [currentPassword, setCurrentPassword] = useState()
    const [newPassword, setNewPassword] = useState({
        password: '',
        err: false,
        errMsg: ''
    })

    const updatePassword = async () => {
        try {
            setLoading(true)
            let validated = true
            let password = newPassword.password.trim()
            console.log("password",newPassword)
            if (password.length < 6) {
                setNewPassword({ ...newPassword, err: true, errMsg: 'Password length must be greater than 5' })
                validated = false
            }
            if (validated) {
                const res = await updateUserPassword({ password: currentPassword, newPassword: password })
                toast.success(res.data.message)
                history.push('/home')

            }
            setLoading(false)

        } catch (error) {
            setLoading(false)
            toast.error(error.response.data.message)
        }

    }

    return (
        <div className={classes.changePasswordContainer}>
            <form className={classes.changePasswordForm}>
                <Typography variant="h5">Change Password</Typography>
                <div className={classes.input}>
                    <label htmlFor="currentPassword">Current Password</label>
                    <input id="currentPassword" type="password" placeholder="Enter current password" onChange={(e) => { setCurrentPassword(e.target.value) }} />
                </div>
                <div className={classes.input}>
                    <label htmlFor="newPassword">New Password</label>
                    <input type="password" id="newPassword" placeholder="Enter new password" onChange={(e) => { setNewPassword({password:e.target.value,err:false,errMsg:''}) }} />
                    {newPassword.err ? <span className={classes.err}>{newPassword.errMsg}</span> : ''} 
                </div>
                <Button color="primary" size="large" variant="contained" onClick={updatePassword} >Update</Button>

            </form>
            {loading && <Loader loading={loading} />}
        </div>
    )
}

export default ChangePassword