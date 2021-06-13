import { Link} from "react-router-dom";


let Navbar = ()=>{

    return (
        <div className="w-full bg-indigo-200">
            <div className="flex justify-between mx-2.5  p-3">
                <div className=""><Link to="/">MESHARE</Link></div>
                <div className="flex px-2  space-x-3.5 ">
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar