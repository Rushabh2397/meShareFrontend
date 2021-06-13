import { Link} from "react-router-dom";
import imageLogo from './images/image-logo.png'
import urlLogo from './images/url.png'
import fileLogo from './images/file.png'
import upload from './images/upload.svg'
let BNavbar = ()=>{

    let uploadFiles = (e)=>{
        let files = e.target.files
        console.log("files",files)
        const fd = new FormData()
        for(let i=0;i<files.length;i++){
            fd.append('files',files[i])
        }
    }

    return (
        <div className="w-full fixed bottom-0 md:hidden ">
           <div className="flex p-3 bg-gray-100 justify-evenly">
               <div className="w-8"><Link to='/images'><img src={imageLogo} alt="imageLogo" /></Link></div>
               <div className="w-8"><Link to='/files'><img src={fileLogo} alt="imageLogo" /></Link></div>
               <div className="w-8"><Link to='/url'><img src={urlLogo} alt="imageLogo" /></Link></div>
               <div className="w-8"><Link to='/url'><img src={urlLogo} alt="imageLogo" /></Link></div>
               <label className="w-8"><img src={upload} alt="imageLogo" /><input multiple type='file'  className="hidden" onChange={(e)=>{uploadFiles(e)}} /></label>
           </div>
        </div>
    )
}

export default BNavbar