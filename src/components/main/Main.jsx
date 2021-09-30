
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DragAndDrop from '../dragAndDrop/DragAndDrop'
import Recent from '../recent/Recent'
import { uploadFile, getAllFiles } from '../api'
import { useDoc } from '../../context/FileContext'
import { useEffect, useState } from 'react';
//import io from 'socket.io-client'


const useStyles = makeStyles((theme) => ({
    container: {
        marginLeft: "70px",
        marginTop: "1rem"
    },
    root: {
        // marginLeft: "70px",
        marginTop: "2rem",
        margin: "0 auto",
        width: "85%",
        // border: "1px solid black"
        [theme.breakpoints.up('md')]: {
            //    marginLeft:"210px",
            width: "75%"
        }

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Main = () => {
    const classes = useStyles();
    const [socket, setSocket] = useState(null)
    const { files, dispatch } = useDoc()

    // if (socket) {
    //     socket.on('success', () => {
    //         console.log("inside success")
    //         getAllUserFiles()
    //     })
    // }

    // socket.on('success',()=>{
    //     getAllUserFiles()
    // })

    // socket.on('connect',()=>{
    //     console.log("connected to server")
    // })

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
            const formData = new FormData()
            files.map(file => {
                formData.append('doc', file)
            })
            const res = await uploadFile(formData);
            if (res.data.status === 'success') {
                getAllUserFiles()
                //socket.emit('uploaded', 'rushabh')

            }

        } catch (error) {

        }
    }
    // useEffect(() => {
    //     const newSocket = io("http://localhost:5000",{transports:["websocket"]});
    //     setSocket(newSocket);
    //     newSocket.emit('join', 'rushabh')
    //     return () => newSocket.close();
    // }, [setSocket])

    useEffect(() => {
        getAllUserFiles()
    }, [])

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                <Toolbar />
                <DragAndDrop uploadFiles={uploadFiles} />
                <Recent userFiles={files} />
            </div>
        </div>
    );
}

export default Main