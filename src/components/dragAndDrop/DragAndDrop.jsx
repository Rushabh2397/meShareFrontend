import Dropzone from 'react-dropzone'
import { makeStyles } from '@material-ui/core/styles';
import toast from 'react-hot-toast'

const useStyles = makeStyles((theme) => ({
    drag: {
        border: "2px dashed black",
        textAlign: 'center',
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "#fafafa",
        [theme.breakpoints.up('md')]: {
            padding: "20px"
        }

    }

}));



const Dashboard = ({uploadFiles}) => {
    const classes = useStyles();

    // const handleFileUpload = (acceptedFiles) => {
    //     console.log("acceptedFiles", acceptedFiles)
    //     const fd = new FormData()
    //     acceptedFiles.map(file => {
    //         fd.append('doc', file)
    //     })

    //     axios.post('http://localhost:5000/doc/auth/upload', fd)
    //         .then(data => {
    //             //socket.emit('uploaded',{room:localStorage.getItem('login').user_name})
    //         })
    //         .catch(err => console.log("e", err))
    // }

    const handleFileUpload = (acceptedFiles)=>{
        uploadFiles(acceptedFiles)
    }

    return (
        <div className={classes.drag}>
            <Dropzone 
            maxSize={1048576} 
            accept="image/*,.pdf,text/*"   
            onDrop={acceptedFiles => { if(acceptedFiles.length>0){ handleFileUpload(acceptedFiles)} }} 
            multiple={true} maxFiles={2}
            onDropRejected={(file)=>{toast.error("File size must less than 1 MB")}}
            >
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p >Drag 'n' drop</p>
                        </div>
                    </section>
                )}
            </Dropzone>
        </div>
    );
}


export default Dashboard