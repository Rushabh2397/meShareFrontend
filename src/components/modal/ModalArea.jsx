
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper, Typography } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';
import { addText } from '../api'
import { useState } from 'react';
import { getAllFiles } from '../api'
import { useDoc } from '../../context/FileContext'
import toast from 'react-hot-toast'
import Loader from '../loader/Loader'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: "none"
    },
    textArea: {
        width: "330px",
        padding: "15px",
        borderRadius: "2px"
    },
    text: {
        marginTop: "4px",
        width: "100%",
        WebkitBoxSizing: "border-box",
        padding: "0.2rem",
        resize: "none",
        border: "none",
        fontWeight: 400,
        letterSpacing: "0.04rem",
        '&:focus': {
            outline: "none !important"
        },
        borderBottom: "1px solid black"
    },
    menuButton: {
        display: "flex",
        justifyContent: 'flex-end',
        marginTop: "10px",
        marginBottom: 0
    },
    close: {
        position: "absolute",
        right: "8px",
        top: "5px",
        zIndex: 2
    },
    info: {
        padding: "15px",
        width: "350px"
    },
    listStyle: {
        textDecoration: 'none',
        listStyle:'none',
        fontSize:"1rem"
    }

}));


const ModalArea = ({ open, handleClose, type }) => {
    const classes = useStyles();
    const [text, setText] = useState();
    const { dispatch } = useDoc()
    const [loading, setLoading] = useState(false)

    const getAllUserFiles = async () => {
        try {
            const res = await getAllFiles();
            if (res.data.status === 'success') {
                dispatch({ type: 'GET_ALL_FILES', payload: res.data.data })
            }
        } catch (error) {

        }
    }

    // const InputProps = {
    //     classsName: classes.inputProps
    // }

    const addUserText = async () => {
        try {
            setLoading(true)
            const res = await addText({ text: text })
            if (res.data.status === 'success') {
                toast.success(res.data.message)
                getAllUserFiles()
            }
            setLoading(false)
            handleClose()
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className={classes.modal}
                // hideBackdrop={true}
                style={{ border: "none" }}
            >
                <div >

                    {
                        type === 'text'
                            ?
                            (
                                <div style={{ position: "relative" }}>
                                    <Paper elevation={4} className={classes.textArea} >
                                        <div className={classes.close} onClick={handleClose}>
                                            <i className="fas fa-times"></i>
                                        </div>
                                        <h5>Text Message</h5>
                                        <TextareaAutosize
                                            className={classes.text}
                                            onChange={(e) => { setText(e.target.value) }}
                                        />
                                        {/* <TextField style={{border:"none"}} InputProps={InputProps} /> */}
                                        {/* <input type="text" className={classes.text}/> */}
                                        <div className={classes.menuButton}>

                                            {/* <SendIcon color="action" fontSize="medium" /> */}
                                            <Button size="small" variant="contained" color="primary" onClick={addUserText}>Send</Button>
                                        </div>
                                    </Paper>
                                </div>

                            )
                            :
                            (<div>
                                <Paper className={classes.info}>
                                    <Typography style={{ textAlign: 'center' }} variant="h4">MeShare</Typography>
                                        <li className={classes.listStyle}>1)  Main puprpose of Meshare is to make it easy for sharing links and files across your own devices without the need of sharing with other people.</li>
                                        <li className={classes.listStyle}>2)  You can use MeShare for sharing file and text/url across your devices.</li>
                                        <li className={classes.listStyle}>3)  You can download image and docs by clicking on download icon.</li>
                                        <li className={classes.listStyle}>4)  You can add text/url by using write icon in the sidebar.</li>
                                        <li className={classes.listStyle}>5)  You can share file upto 1 Mb.</li>
                                        <li className={classes.listStyle}><strong>Note:</strong> All the documents will be deleted after 1 hour.</li>
                                    

                                </Paper>

                            </div>)
                    }
                </div>
            </Modal>
            {loading && <Loader loading={loading} />}
        </div>
    )

}


export default ModalArea