import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";

import './index.css'


import { MainApp } from './09-useContext/MainApp'

//import  './08-useReducer/intro-reducer'

 createRoot(document.getElementById('root')).render(
//   <StrictMode>
  <BrowserRouter>
      <MainApp/>
  </BrowserRouter>
   
//  </StrictMode>,
 )

