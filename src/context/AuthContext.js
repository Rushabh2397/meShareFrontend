import { createContext, useContext, useReducer} from 'react'




const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                email: action.payload.email,
                token: action.payload.token
            }

        case 'LOGOUT_SUCCESS':
            return {
                email: '',
                token: false
            }

        default:
            return state

    }
}

let intialState = {
    email: '',
    token:''
}

export const AuthProvider = ({ children }) => {
    const userState = JSON.parse(localStorage.getItem("meShare")) || {email:'',token:''};
    if(userState){
        intialState.token = userState.token
    }

    const [state, dispatch] = useReducer(authReducer,  intialState )

    return (
        <>
            <AuthContext.Provider value={{user:state,userDispatch:dispatch}}>
                {children}
            </AuthContext.Provider>
        </>)
}

export const useAuth = () => {
    return useContext(AuthContext)
}