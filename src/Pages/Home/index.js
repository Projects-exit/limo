import React, {useEffect} from 'react'

import Hero from './Hero'
import Reserve from './Reserve'
import Quality from './Quality'
import Drivers from './Drivers'
import OurFleet from './OurFleet'
import OurLocation from './OurLocation'

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
