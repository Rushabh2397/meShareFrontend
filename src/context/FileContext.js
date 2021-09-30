import { createContext, useContext, useReducer} from 'react'

const FileContext = createContext();

const fileReducer = (state, action) => {
    switch (action.type) {

        case 'GET_ALL_FILES':
            console.log("action",action)
            return {
                files : action.payload
            }

        default:
            return state

    }
}

let intialState = {
    files: []
}

export const FileProvider = ({ children }) => {

    const [state, dispatch] = useReducer(fileReducer,  intialState )

    return (
        <>
            <FileContext.Provider value={{files:state.files,dispatch}}>
                {children}
            </FileContext.Provider>
        </>)
}

export const useDoc = () => {
    return useContext(FileContext)
}