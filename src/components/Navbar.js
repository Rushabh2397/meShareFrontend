import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useLogin } from './context'

let Navbar = () => {

    const { isLoggedIn, dispatch } = useLogin();
    let history = useHistory();
    
    let logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('login');
        dispatch({ type: 'LOGOUT_SUCCESS' })
        history.push('/login')
    }
    
    useEffect(() => {
        console.log("isLoggeds", isLoggedIn)
    }, [isLoggedIn])

    return (
        <div className="w-full bg-indigo-200">
            <div className="flex justify-between mx-2.5  p-3">
                <div className=""><Link to="/">MESHARE</Link></div>
                <div className="flex px-2  space-x-3.5 ">
                    {!isLoggedIn ? (<Link to="/register">Register</Link>) : (<Link to="/doc">Doc</Link>)}
                    {!isLoggedIn ? ('') : (<Link to="/url">Url</Link>)}
                    {!isLoggedIn ? (<Link to="/login">Login</Link>) : (<button onClick={logout}>Logout</button>)}    
                </div>
            </div>
        </div>
    )
}

export default Navbar