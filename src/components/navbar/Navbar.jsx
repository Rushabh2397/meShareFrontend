import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Sidebar from '../sidebar/Sidebar'
import { Avatar } from '@material-ui/core';
import { useState } from 'react';
import ProfileMenu from '../profileMenu/ProfileMenu'
import { useAuth } from '../../context/AuthContext'
import {Link,useRouteMatch} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1

    },
    // navContainer:{
    //   width:"%",
    //   margin: "0 auto"
    // },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        letterSpacing: '0.2rem'
    },
    navLink: {
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center"
    },
    navItem: {
        fontSize: "1.2rem"
    }
}));


const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const {user} = useAuth();
    const match = useRouteMatch("/home")

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" style={{ zIndex: 1300,background:'white' }} color="transparent" >
                <Toolbar className={classes.navContainer}>
                    <Typography variant="h4" className={classes.title}>
                        MeShare
                    </Typography>
                    {/* <Button color="inherit">Login</Button>
                    <Button color="inherit">Signup</Button> */}
                    <div>
                        <ul className={classes.navLink}>
                            {!user.token &&<li className={classes.navItem}><Link to="/login" >Login</Link></li>}
                            {!user.token &&<li className={classes.navItem}><Link to="/signup" >Signup</Link></li>}
                            {user.token &&<li className={classes.navItem}><Link to="/home" >Home</Link></li>}
                            {user.token && <span style={{cursor:'pointer'}} onClick={handleClick}  ><Avatar >{user.email.charAt(0).toUpperCase() + user.email.charAt(1).toUpperCase() }</Avatar ></span>}

                            {/* <li className={classes.navItem}><Link to="/signup" >Logout</Link></li> */}

                        </ul>
                    </div>
                </Toolbar>
            </AppBar>
            <ProfileMenu anchorEl={anchorEl} handleClick={handleClick} handleClose={handleClose}/>
            {user.token && match &&<Sidebar />}
            
        </div>

    );
}

export default Navbar