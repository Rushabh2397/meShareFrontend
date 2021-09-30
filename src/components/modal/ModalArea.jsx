
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton, Paper, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import TextareaAutosize from 'react-textarea-autosize';

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
        marginTop:"4px",
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
        zIndex:2
    }

}));


const ModalArea = ({ open, handleClose, type }) => {
    const classes = useStyles();
    const InputProps = {
        classsName: classes.inputProps
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={classes.modal}
            hideBackdrop={true}
            style={{ border: "none" }}
        >
            <div >

                {
                    type === 'text'
                        ?
                        (
                            <div style={{position:"relative"}}>
                                <Paper elevation={4} className={classes.textArea} >
                                    <div className={classes.close} onClick={handleClose}>
                                        <i class="fas fa-times"></i>
                                    </div>
                                    <h5>Text Message</h5>
                                    <TextareaAutosize
                                        className={classes.text}

                                    />
                                    {/* <TextField style={{border:"none"}} InputProps={InputProps} /> */}
                                    {/* <input type="text" className={classes.text}/> */}
                                    <div className={classes.menuButton}>

                                        {/* <SendIcon color="action" fontSize="medium" /> */}
                                        <Button size="small" variant="contained" color="primary">Send</Button>
                                    </div>
                                </Paper>
                            </div>

                        )
                        :
                        (<div></div>)
                }
            </div>
        </Modal>
    )

}


export default ModalArea