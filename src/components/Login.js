import { useState } from 'react'
import axios from 'axios'
import { useLogin } from './context'
import { useHistory } from 'react-router-dom'
let Login = ()=>{
  const [values, setValues] = useState({
    user_name: "",
    password: "",
  });

  const {dispatch } = useLogin();
  let history = useHistory()


  const handleChange = (event,name) => {
    setValues({ ...values, [name]: event.target.value });
  }

  const onSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/user/auth/login',values)
      .then(data=>{
        let res= data.data.data
        localStorage.setItem('token',res.token)
        localStorage.setItem('login',JSON.stringify({'userLoggedIn':true,user_name:res.user_name}))
        dispatch({type:'LOGIN_SUCCESS',payload: res.user_name});
        history.push('/doc')
      }) 
      .catch(err=>{
        console.log("errrrrr",err)
      })
  }


    return(
        <form className="flex flex-col w-64 h-74  mt-14 items-center   justify-center  m-auto p-6 bg-gray-100">
        <div className="mb-2 mt-6">
          <label className="block mb-2">User Name</label>
          <input type="text" className="w-52 rounded-md" onChange={(e)=>{handleChange(e,"user_name")}}/>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input type="text" className="w-52 rounded-md" onChange={(e)=>{handleChange(e,"password")}} />
        </div>
        <div className="mb-2">          
         <input className=" bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-6 mb-6 rounded" type="submit" onClick={onSubmit} value="Login"/>
        </div>  
        
    </form>
    )
}

export default Login