import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from '../sidebar/Sidebar'
import {Link} from 'react-router-dom'
import { Avatar } from '@material-ui/core';

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
        letterSpacing:'0.2rem'
    },
    navLink:{
        display:"flex",
        gap:"1rem",
        justifyContent:"center",
        alignItems:"center"
    },
    navItem:{
        fontSize:"1.2rem"
    }
}));


const Navbar = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <AppBar position="fixed" style={{ zIndex: 1300,}} color="transparent" >
                <Toolbar className={classes.navContainer}>
                    <Typography variant="h4" className={classes.title}>
                        MeShare
                    </Typography>
                    {/* <Button color="inherit">Login</Button>
                    <Button color="inherit">Signup</Button> */}
                    <div>
                        <ul className={classes.navLink}>
                            {/* <li className={classes.navItem}><Link to="/login" >Login</Link></li>
                            <li className={classes.navItem}><Link to="/signup" >Signup</Link></li> */}
                            <Avatar>RS</Avatar>
                            {/* <li className={classes.navItem}><Link to="/signup" >Logout</Link></li> */}

                        </ul>
                    </div>
                </Toolbar>
            </AppBar>
            <Sidebar />
        </div>

    );
}

export default Navbar