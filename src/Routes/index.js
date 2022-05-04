import React from 'react'
import { Routes, Route} from "react-router-dom";

import routesList from './RoutesList';

export default function Index(props) {
      
  
      return (
          <>
           <Routes>
            {routesList.map(link => <Route key={link.path} path={link.path} element={link.component} />)}
           </Routes>
          </>
      )
  }
  