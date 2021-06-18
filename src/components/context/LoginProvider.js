import { createContext, useContext, useReducer} from 'react'




const LoginContext = createContext();

const loginReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user_name: action.payload,
                isLoggedIn: true
            }

        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                user_name: '',
                isLoggedIn: false
            }

        default:
            return state

    }
}

let intialState = {
    user_name: '',
    isLoggedIn: false
}

export const LoginProvider = ({ children }) => {
    const localState = JSON.parse(localStorage.getItem("login"));
    if(localState && localState.userLoggedIn){
        intialState.isLoggedIn = true
    }

    const [state, dispatch] = useReducer(loginReducer,  intialState )

    return (
        <>
            <LoginContext.Provider value={{isLoggedIn:state.isLoggedIn ,dispatch}}>
                {children}
            </LoginContext.Provider>
        </>)
}

export const useLogin = () => {
    return useContext(LoginContext)
}