import { Tooltip, Typography } from '@material-ui/core';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { makeStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "1.5rem",

    },
    title: {
        marginBottom: "1rem"
    },
    name: {
        marginBottom: "0.8rem"
    },
    imageView: {
        display: 'flex',
        flexWrap: 'wrap',
        // justifyContent: 'end',
        // alignContent: 'flex-start'
    },
    imageContainer: {
        maxWidth: '200px',

        //  border:"1px solid black",
        marginBottom: "0.8rem",
        marginRight: "1rem",
        borderRadius: "2px"
    },
    image: {
        maxWidth: "100%",
        //  height: "150px",
        objectFit: 'contain'
    },
    fileContainer: {
        display: "flex",
        flexDirection: 'column',
        marginRight: "0.9rem",
        marginBottom: "1rem",
        padding: "1.6rem",
        flexWrap: 'wrap',
        border: "1px solid grey",
        borderRadius: "5px",
        position: 'relative'
    },
    fileName: {
        width: "180px",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        margin: "0"

    },
    userImg: {
        height: "200px",
        width: "200px",
        marginBottom: "0.4rem"
    },

    download: {
        position: 'absolute',
        right: "5px",
        top: "4px"
    }
}));





const Recent = ({ userFiles }) => {
    const classes = useStyles()
    const imageArr = userFiles.filter((file) => file.type === 'image');
    const docsArr = userFiles.filter((file) => file.type === 'doc');

    const downloadFile = (file, name) => {
        fetch(file)
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = name;
                    a.click();
                });
            });
    }

    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant="h4">Recents</Typography>
            {imageArr.length > 0 && <Typography className={classes.name} variant="h5">Images</Typography>}
            {
                imageArr.length > 0
                &&
                <div className={classes.imageView}>

                    {/* <div className={classes.imageContainer}>
                    <Paper elevation={4}>
                        <img className={classes.image} src={"http://localhost:5000/uploads/image/1623911714452modi.jpeg"} />
                    </Paper>
                </div>
                <div className={classes.imageContainer}>
                    <Paper elevation={4}>
                        <img className={classes.image} src={"http://localhost:5000/uploads/image/1623911714227football.jpeg"} />
                    </Paper>
                </div> */}
                    {
                        // imageArr.map(file => {
                        //     return <div className={classes.imageContainer} onClick={() => downloadFile(file.file_name, file.original_name)}>
                        //         {/* <Paper elevation={4}> */}
                        //         <img className={classes.image} src={file.file_name} />
                        //         {/* </Paper> */}
                        //     </div>


                        // })
                        imageArr.map(file => {
                            return <div className={classes.fileContainer}>
                                <div className={classes.imgContainer}>
                                    <img className={classes.userImg} src={file.file_name} />

                                </div>
                                <div className={classes.fileName}>
                                    {file.original_name}
                                </div>
                                <GetAppIcon className={classes.download} onClick={() => downloadFile(file.file_name, file.original_name)} />
                            </div>



                            // <div className={classes.imageContainer} onClick={() => downloadFile(file.file_name, file.original_name)}>
                            //     {/* <Paper elevation={4}> */}
                            //     <img className={classes.image} src={file.file_name} />
                            //     {/* </Paper> */}
                            // </div>


                        })
                    }
                </div>
            }

            {docsArr.length > 0 && <div style={{ marginBottom: "1.2rem" }}>Documents</div>}
            {
                <div className={classes.imageView}>
                    {
                        // docsArr.map(file => {
                        //     let src = file.file_name.split('.')[1] === 'pdf' ? "http://localhost:5000/uploads/document/pdf.png" : "http://localhost:5000/uploads/document/doc.png"
                        //     return <Tooltip title={file.original_name}>
                        //         <div className={classes.imageContainer} onClick={() => downloadFile(file.file_name, file.original_name)}>
                        //             {/* <Paper elevation={4}> */}
                        //             <img className={classes.image} src={src} />
                        //             {/* </Paper> */}
                        //         </div>
                        //     </Tooltip>


                        // })
                        docsArr.map(file => {
                            let src = file.file_name.split('.')[1] === 'pdf' ? "http://localhost:5000/uploads/document/pdf.png" : "http://localhost:5000/uploads/document/doc.png"
                            return <Tooltip title={file.original_name}>
                                <div className={classes.fileContainer} onClick={() => downloadFile(file.file_name, file.original_name)}>
                                    {/* <Paper elevation={4}> */}
                                    <div className={classes.imgContainer}>
                                        <img className={classes.userImg} src={src} />
                                    </div>
                                    <div className={classes.fileName}>
                                        {file.original_name}
                                    </div>
                                    <GetAppIcon className={classes.download} onClick={() => downloadFile(file.file_name, file.original_name)} />
                                    {/* </Paper> */}
                                </div>
                            </Tooltip>


                        })
                    }
                </div>
            }

        </div>
    );
}

export default Recent