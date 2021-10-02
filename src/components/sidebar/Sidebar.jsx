import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ModalArea from '../modal/ModalArea'
import { useState } from 'react';
import { useDoc } from '../../context/FileContext'
import { uploadFile, getAllFiles } from '../api'
import toast from 'react-hot-toast'
import Loader from '../loader/Loader'
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
    const [loading,setLoading] = useState(false)

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
            if (res.data.status === 'success') {
                dispatch({ type: 'GET_ALL_FILES', payload: res.data.data })
            }
        } catch (error) {
            toast.error('Something went wrong!')
        }
    }

    const uploadFiles = async (files) => {
        try {
            console.log("files", files)
            setLoading(true)
            const formData = new FormData()
            // files.map(file => {
            //     formData.append('doc', file)
            // })
            let maxSize = 1048576;
            let size = 0;
            for (let i = 0; i < files.length; i++) {
                formData.append('doc', files[i])
                size = size + files[i].size
            }
            console.log("size", size)
            if (size > maxSize) {
                toast.error('File size should be less than 1 Mb')
            }
            if (size < maxSize) {
                const res = await uploadFile(formData);
                if (res.data.status === 'success') {
                    getAllUserFiles()
                    //socket.emit('uploaded', 'rushabh')

                }
            }
            setLoading(false)

        } catch (error) {
            setLoading(false)
            toast.error('Something went wrong!')
            
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
                                <i className="far fa-images fa-2x" ></i>
                                <input style={{ postion: 'absolute', visibility: "hidden", zIndex: 5, width: "1px", height: "1px" }} multiple={true} type='file' accept="image/*,.pdf,text/*" onChange={(e) => { uploadFiles(e.target.files) }} />
                            </label>


                        </ListItem>
                    </List>
                    <List    >
                        <ListItem >
                            <i onClick={() => { handleModal('text') }} className="fas fa-pencil-alt fa-2x" ></i>

                        </ListItem>
                    </List>

                    <List>
                        <ListItem>
                            <i onClick={() => { handleModal('info') }} className="fas fa-info-circle fa-2x"></i>

                        </ListItem>
                    </List>



                </div>
            </Drawer>
            {open && <ModalArea open={open} setOpen={setOpen} handleClose={handleClose} type={type} />}
            {loading && <Loader loading={loading}/>}
        </div>
    );
}

export default Sidebar