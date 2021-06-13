


let Register = ()=>{
    return(
        <form className="flex flex-col w-64 h-74  mt-14 items-center   justify-center  m-auto p-6 bg-gray-100">
            <div className="mb-2 mt-6">
              <label className="block mb-2">User Name</label>
              <input type="text" className="w-52 rounded-md"/>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Password</label>
              <input type="text" className="w-52 rounded-md"/>
            </div>
            <div className="mb-2">          
             <input className=" bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-6 mb-6 rounded" type="submit" value="Register"/>
            </div>  
            
        </form>
    )
}

export default Register