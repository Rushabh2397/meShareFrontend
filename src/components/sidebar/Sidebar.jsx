import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ModalArea from '../modal/ModalArea'
import { useState } from 'react';
import DragAndDrop from '../dragAndDrop/DragAndDrop'
import { useDoc } from '../../context/FileContext'
import { uploadFile, getAllFiles } from '../api'

const drawerWidth = 70;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        border: "none"
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: 'white',
        border: "none"
    },
    drawerContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: "column",
        textAlign: 'center',
        overflow: 'hidden',
        border: "none"
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
    const { dispatch } = useDoc()
    const [open, setOpen] = useState(false);
    const [type, setType] = useState('text')

    const handleModal = (type) => {
        setOpen(!open)
        setType(type)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const getAllUserFiles = async () => {
        try {
            const res = await getAllFiles();
            console.log("res", res)
            if (res.data.status === 'success') {
                dispatch({ type: 'GET_ALL_FILES', payload: res.data.data })
            }
        } catch (error) {

        }
    }

    const uploadFiles = async (files) => {
        try {
            console.log("files", files)
            const formData = new FormData()
            // files.map(file => {
            //     formData.append('doc', file)
            // })
            for (let i = 0; i < files.length; i++) {
                formData.append('doc', files[i])
            }
            const res = await uploadFile(formData);
            if (res.data.status === 'success') {
                getAllUserFiles()
                //socket.emit('uploaded', 'rushabh')

            }

        } catch (error) {
            console.log("error", error)
        }
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
                            <label>
                                <i class="far fa-images fa-2x" ></i>
                                <input style={{ postion: 'absolute', visibility: "hidden", zIndex: 5, width: "1px", height: "1px" }} multiple type='file' accept="image/*" onChange={(e) => { uploadFiles(e.target.files) }} />
                            </label>


                        </ListItem>
                    </List>
                    <List    >
                        <ListItem >
                            <i onClick={() => { handleModal('text') }} class="fas fa-pencil-alt fa-2x" ></i>

                        </ListItem>
                    </List>

                    <List>
                        <ListItem>
                            <i class="fas fa-info-circle fa-2x"></i>

                        </ListItem>
                    </List>



                </div>
            </Drawer>
            {open && <ModalArea open={open} setOpen={setOpen} handleClose={handleClose} type={type} />}
        </div>
    );
}

export default Sidebar