import React, {useEffect} from 'react'
import { Routes, Route} from "react-router-dom";

import routesList from './RoutesList';
import InitCars from 'Hooks/initCars';

export default function Index(props) {
  

  const {initCars} = InitCars()
  
  useEffect(() => {
    initCars()
  }, [])

    
  
      return (
          <>
           <Routes>
            {routesList.map(link => <Route key={link.path} path={link.path} element={link.component} />)}
           </Routes>
          </>
      )
  }

