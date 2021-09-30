import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ModalArea from '../modal/ModalArea'
import { useState } from 'react';

const drawerWidth = 70;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        border:"none"
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: 'white',
        border:"none"
    },
    drawerContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: "column",
        textAlign: 'center',
        overflow: 'auto',
        border:"none"
    },
    iconArea: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconText: {
        marginLeft: "0.2rem",
        fontSize: "1.2rem"
    }
}));










const Sidebar = () => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [type,setType] = useState('text')
    
    const handleModal = (type) => {
        setOpen(!open)
        setType(type)
    }

    const handleClose = ()=>{
        setOpen(false)
    }

    return (
        <div>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />

                <div className={classes.drawerContainer}>

                    <List>
                        <ListItem >
                            <i class="far fa-images fa-2x" ></i>

                        </ListItem>
                    </List>
                    <List    >
                        <ListItem >
                            <i onClick={()=>{handleModal('text')}} class="fas fa-pencil-alt fa-2x" ></i>

                        </ListItem>
                    </List>

                    <List>
                        <ListItem>
                            <i class="fas fa-info-circle fa-2x"></i>

                        </ListItem>
                    </List>



                </div>
            </Drawer>
            {open && <ModalArea open={open} setOpen={setOpen} handleClose={handleClose} type={type} /> }
        </div>
    );
}

export default Sidebar