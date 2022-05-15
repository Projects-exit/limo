import React,{useEffect} from 'react'

import Navbar from 'Pages/Navbar'
import Footer from 'Pages/Footer'

import ReserveCard from './ReserveCard'
import ChooseCar from './ChooseCar'
import { useScrollBehaviours } from 'Hooks/useScrollBehaviours'


export default function Index(props) {

    const { ScrollToTop } = useScrollBehaviours()

    useEffect(() => {
        ScrollToTop()

    }, [])
    return (
        <>
            <Navbar />
            <ReserveCard />
            <ChooseCar />
            <Footer />
        </>
    )
}
