// import { useEffect } from 'react'
// import axios from 'axios'
// import { useDoc, useSocket } from './context'
// import fileDownload from 'js-file-download';

// let Files = () => {
//     const { files, dispatch } = useDoc()
//     const { socket } = useSocket()

//     const getFiles = async () => {
//         try {
//             let res = await axios.get('http://localhost:5000/doc/api/get_images')
//             dispatch({ type: 'FILES', payload: res.data.data })

//         } catch (error) {
//             console.log("err", error)
//         }
//     }

//     const downloadFile = (file, name) => {
//         fetch(file)
//             .then(response => {
//                 response.blob().then(blob => {
//                     let url = window.URL.createObjectURL(blob);
//                     let a = document.createElement('a');
//                     a.href = url;
//                     a.download = name;
//                     a.click();
//                 });
//             });
//     }

//     useEffect(() => {
//         socket.on('connect', () => socket.emit("join", localStorage.getItem('login')))
//         getFiles()
//         // return () => { socket.off('connect') }
//         // eslint-disable-next-line
//     }, [])
//     socket.on('disconnect', (reason) => console.log('disconnected', reason))
//     socket.on('success', () => { getFiles() })

//     return (
       



//     //     <>
//     //     {
//     //         files.length>0 ?
//     //     (<div className=" mt-4 grid grid-cols-2  gap-x-3 gap-y-10  sm:gap-y-10 md:grid-cols-4 md:justify-items-center lg:grid-cols-5">
//     //         {

//     //             files.map((img, index) => {
//     //                 let imgSrc = img.file_name
//     //                 if (img.type === 'doc') imgSrc = "http://localhost:5000/uploads/document/doc.png"
//     //                 if (img.file_name.split('.')[1] === 'pdf') imgSrc = "http://localhost:5000/uploads/document/pdf.png"

//     //                 return (
//     //                     <div className="w-28 h-28 p-4 sm:w-44 sm:h-44 md:w-48 md:h-48" onClick={() => downloadFile(img.file_name, img.original_name)} key={index}>
//     //                         <img className="w-28 h-28 object-cover sm:w-44 sm:h-44 md:w-48 md:h-48" alt="doc" src={imgSrc} />
//     //                         <span className=" block text-center overflow-ellipsis overflow-hidden ..."> {img.original_name.split('.')[0].replaceAll(/\s/g, '')} </span>

//     //                     </div>
//     //                 )

//     //             })
//     //         }
//     //     </div>) : (<div className="text-2xl text-center mt-60" >No Files</div>)
        
//     // }
//     //   </>
//     // )


//     <>
//     {
//         files.length>0 ?
//     (<div className="grid grid-cols-2 gap-y-6 gap-x-4 mt-4 justify-items-center  sm:grid-cols-3 md:grid-cols-4 md:gap-x-2 lg:gap-x-0.5 2xl:grid-cols-5  overscroll-auto">
//         {

//             files.map((img, index) => {
//                 let imgSrc = img.file_name
//                 if (img.type === 'doc') imgSrc = "http://localhost:5000/uploads/document/doc.png"
//                 if (img.file_name.split('.')[1] === 'pdf') imgSrc = "http://localhost:5000/uploads/document/pdf.png"

//                 return (
//                     <div className="p-4 w-36 h-44 border-solid border-2 rounded-lg border-gray-500 md:w-56 md:h-52 lg:w-60 lg:h-56" onClick={() => downloadFile(img.file_name, img.original_name)} key={index}>
//                         <img className=" w-34 h-28 m-auto md:w-44 md:h-40 lg:w-48 lg:h-44" alt="doc" src={imgSrc} />
//                         <span className="block text-center overflow-ellipsis overflow-hidden ..."> {img.original_name.split('.')[0].replaceAll(/\s/g, '')} </span>

//                     </div>
//                 )

//             })
//         }
//     </div>) : (<div className="text-2xl text-center mt-60" >No Files</div>)
    
// }
//   </>
// )
   
// }

// export default Files