import React,{useEffect} from 'react'
import Reservation from './Reservation'
import { EntryScreen, ChangeScreen } from 'Components/SplashScreens'

import Navbar from 'Pages/Navbar'
import Footer from 'Pages/Footer'


import { useScrollBehaviours } from 'Hooks/useScrollBehaviours'

export default function Index(props) {
    
 const { ScrollToTop } = useScrollBehaviours()

    useEffect(() => {
        ScrollToTop()

    }, [])
    return (
        <>
        {/* <EntryScreen/> */}
        {/* <ChangeScreen /> */}
        <Navbar />
        
        <Reservation/>
        <Footer />
            
        </>
    )
}
