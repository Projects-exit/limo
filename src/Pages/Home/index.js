import React, {useEffect} from 'react'

import Hero from './Hero'
import Reserve from './Reserve'
import Quality from './Quality'
import Drivers from './Drivers'
import OurFleet from './OurFleet'
import OurLocation from './OurLocation'

import Navbar from 'Pages/Navbar'
import Footer from 'Pages/Footer'
import { useLocation } from 'react-router-dom';
import { useScrollBehaviours } from 'Hooks/useScrollBehaviours'

export default function Index(props) {

    const { ScrollToTop } = useScrollBehaviours()
    const location = useLocation()
    
    useEffect(() => {
        if (location.hash.slice(1)) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        } else {
        
            ScrollToTop()
        }
    }, [location])

    return (
        <>
            <Navbar />
            <div className="text-center ">
                <Hero />
                <Reserve />
            </div>
            <Quality />
            <Drivers />
            <OurFleet />
            <OurLocation />
            <Footer />
        </>
    )
}
