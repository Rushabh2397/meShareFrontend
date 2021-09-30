import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useLogin } from './context'
import profileLogo from './images/man.png'
import fileLogo from './images/file.png'
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
        <div className="w-full bg-twitter text-white  p-1">
            <div className="flex justify-between items-center  mx-4  p-2">
                <div className="text-2xl">MESHARE</div>
                <div className="flex px-4 items-center space-x-3.5 ">
                    {!isLoggedIn ? (<Link to="/register">Register</Link>) : (<Link className="text-lg" to="/doc">Doc</Link>)}
                    {!isLoggedIn ? ('') : (<Link className="text-lg" to="/url">Url</Link>)}
                    {!isLoggedIn ? (<Link to="/login">Login</Link>) : (<button className="md:hidden" onClick={logout}>Logout</button>)}
                    {/* {!isLoggedIn ? '' : (<><div className="" >
                        <button><img className="w-9 h-9" src={profileLogo} alt="profile" /></button>
                    </div></>)} */}
                </div>
            </div>
        </div>
    )
}

export default Navbar