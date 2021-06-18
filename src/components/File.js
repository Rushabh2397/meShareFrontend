import { useEffect } from 'react'
import axios from 'axios'
import { useDoc, useSocket } from './context'
import fileDownload from 'js-file-download';

let Files = () => {
    const { files, dispatch } = useDoc()
    const { socket } = useSocket()

    const getFiles = async () => {
        try {
            let res = await axios.get('http://localhost:5000/doc/api/get_images')
            dispatch({ type: 'FILES', payload: res.data.data })

        } catch (error) {
            console.log("err", error)
        }
    }
    
    const downloadFile =(file,name)=>{
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

    useEffect(() => {
        socket.on('connect', () => socket.emit("join", localStorage.getItem('login')))
        getFiles()
        // return () => { socket.off('connect') }
        // eslint-disable-next-line
    }, [])
    socket.on('disconnect', (reason) => console.log('disconnected', reason))
    socket.on('success', () => { getFiles() })

    return (
        // <div className=" flex flex-wrap  w-80 sm:w-full xl:w-11/12  mt-8 mx-auto overscroll-x-auto" >

        //     {

        //         files.map((img, index) => {
        //             let imgSrc = img.file_name
        //             if (img.type === 'doc') imgSrc = "http://localhost:5000/uploads/document/doc.png"
        //             if (img.file_name.split('.')[1] === 'pdf') imgSrc = "http://localhost:5000/uploads/document/pdf.png"

        //             return <div key={index} className="flex flex-col sm:mx-auto md:mx-0 md:mr-2.5    mb-4 mr-2.5">
        //                 <a download target="_blank" rel="noreferrer" href={img.file_name} title={img.original_name.split('.')[0].replaceAll(/\s/g, '')}>
        //                     <img className="w-24 h-24 object-cover sm:w-60 sm:h-60" alt="doc" src={imgSrc} />
        //                 </a>
        //                 <span className="w-24 text-center text-base md:w-60 md:text-lg  overflow-ellipsis overflow-hidden ...">{img.original_name.split('.')[0].replaceAll(/\s/g, '')}</span>
        //             </div>

        //         })

        //     }



        // </div>
        <div className="mt-4 grid grid-cols-3 gap-x-3 gap-y-10  sm:gap-y-10 md:grid-cols-4 md:justify-items-center lg:grid-cols-5">
            {

                files.map((img, index) => {
                    let imgSrc = img.file_name
                    if (img.type === 'doc') imgSrc = "http://localhost:5000/uploads/document/doc.png"
                    if (img.file_name.split('.')[1] === 'pdf') imgSrc = "http://localhost:5000/uploads/document/pdf.png"

                    return (
                        <div className="w-28 h-28 sm:w-44 sm:h-44 md:w-48 md:h-48" onClick={()=>downloadFile(img.file_name,img.original_name)}  key={index}>
                            {/* <a download={img.original_name}  target="_blank" rel="noreferrer" href={img.file_name}  title={img.original_name.split('.')[0].replaceAll(/\s/g, '')}> */}
                                <img className="w-28 h-28 object-cover sm:w-44 sm:h-44 md:w-48 md:h-48" alt="doc" src={imgSrc} />
                                <span className="block text-center overflow-ellipsis overflow-hidden ..."> {img.original_name.split('.')[0].replaceAll(/\s/g, '')} </span>
                            {/* </a> */}
                        </div>
                    )

                })
            }
        </div>

    )
}

export default Files