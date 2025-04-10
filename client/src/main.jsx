import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/Authcontext';
import { SocketContextProvider } from './context/SocketContext';


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        {/* <ConversationContextProvider> */}
          <SocketContextProvider>

            <App />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            // transition={Bounce}
            />

          </SocketContextProvider>
        {/* </ConversationContextProvider> */}
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
