import { createContext, useContext, useReducer} from 'react'

const FileContext = createContext();

const fileReducer = (state, action) => {
    switch (action.type) {
        case 'FILES':
            return {
                ...state,
                files : action.payload
            }

        case 'URLS':
            return {
                ...state,
                urls: action.payload
            }

        default:
            return state

    }
}

let intialState = {
    files: [],
    urls: []
}

export const FileProvider = ({ children }) => {

    const [state, dispatch] = useReducer(fileReducer,  intialState )

    return (
        <>
            <FileContext.Provider value={{files:state.files,urls:state.urls ,dispatch}}>
                {children}
            </FileContext.Provider>
        </>)
}

export const useDoc = () => {
    return useContext(FileContext)
}