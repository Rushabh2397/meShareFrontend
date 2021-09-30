// import axios from 'axios'
// import imageLogo from './images/image-logo.png'
// import urlLogo from './images/url.png'
// import fileLogo from './images/file.png'
// import { useSocket } from './context'

// let BNavbar = () => {
    
//     const { socket } = useSocket()

//     let uploadFiles = (e) => {
//         let files = e.target.files
//         const fd = new FormData()
//         for (let i = 0; i < files.length; i++) {
//             fd.append('doc', files[i])
//         }

//         axios.post('http://localhost:5000/doc/api/upload',fd)
//           .then(data=>{
//             socket.emit('uploaded',{room:localStorage.getItem('login').user_name})
//           })
//           .catch(err=>console.log("e",err))
//     }

//     return (
//         <div className="w-full fixed bottom-0  ">
//             <div className="flex p-3 bg-gray-100 justify-evenly">
//                 <label className="w-8"><img src={imageLogo} alt="imageLogo" /><input multiple type='file' className="hidden" accept="image/*" onChange={(e) => { uploadFiles(e) }} /></label>
//                 {/* <div className="w-8"><Link to='/images'><img src={imageLogo} alt="imageLogo" /></Link></div> */}
//                 <label className="w-8"><img src={fileLogo} alt="imageLogo" /><input multiple type='file' className="hidden" accept=".pdf,text/*" onChange={(e) => { uploadFiles(e) }} /></label>
//                 {/* <div className="w-8"><Link to='/files'><img src={fileLogo} alt="imageLogo" /></Link></div> */}
//                 {/* <div className="w-8"><Link to='/url'><img src={urlLogo} alt="imageLogo" /></Link></div> */}
//                 <label className="w-8"><img src={urlLogo} alt="imageLogo" /></label>
//                 {/* <label className="w-8"><img src={upload} alt="imageLogo" /><input multiple type='file' className="hidden" onChange={(e) => { uploadFiles(e) }} /></label> */}
//             </div>
//         </div>
//     )
// }

// export default BNavbar

// // md:hidden