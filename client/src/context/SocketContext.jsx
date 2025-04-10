import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./Authcontext";
import { io } from "socket.io-client";


export const SocketContext = createContext();


export const UseSocketContext=()=>{
    return useContext(SocketContext);
}

export const SocketContextProvider = ({children})=>{

    const [socket,setSocket] = useState(null);
    const [onlineUsers,setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(()=>{
       if(authUser){

           const socket = io(`${import.meta.env.VITE_SERVER_BASE_URL}`,{
            query:{
                userId:authUser._id
            }
          });

          setSocket(socket)

           socket.on("connect", () => {
               console.log("Connected to socket.io server");
           });

           socket.on("connect_error", (err) => {
               console.log("Connection error:", err);
           });



          socket.on("getOnlineUsers",(users)=>{
              setOnlineUsers(users)
          })

          return ()=> socket.close();
       }
       else{
         if(socket){
            socket.close();
            setSocket(null);
         }
       }
    },[authUser])

    return <SocketContext.Provider value={{socket,onlineUsers}}>
        {children}
    </SocketContext.Provider>
} 