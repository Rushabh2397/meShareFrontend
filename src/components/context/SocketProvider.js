import { createContext, useContext} from 'react'
import socketio from "socket.io-client";


const socket = socketio('http://localhost:5000',{ transports:["websocket"]});

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {

    return (
        <>
            <SocketContext.Provider value={{socket}}>
                {children}
            </SocketContext.Provider>
        </>)
}

export const useSocket = () => {
    return useContext(SocketContext)
}