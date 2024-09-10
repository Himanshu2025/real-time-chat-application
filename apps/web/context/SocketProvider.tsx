'use client'

import React, { useCallback } from 'react'

interface ISocketContext {
    sendMessage: (msg: string) => any; 
}

interface SocketProviderProps {
    children?: React.ReactNode; 
}

const SocketContext = React.createContext<ISocketContext | null>(null); 

    const sendMessage: ISocketContext['sendMessage'] = useCallback((msg) => {
        console.log("Send Messgae", msg)
    }, [])
export const SocketProvider: React.FC<SocketProviderProps> = ({children}) => {
    return (
        <SocketContext.Provider value={null}>
            {}
        </SocketContext.Provider>
    )
}