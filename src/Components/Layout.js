import { useEffect } from 'react'
import Navbar from 'Pages/Navbar'
import Footer from 'Pages/Footer'
import { useScrollBehaviours } from 'Hooks/useScrollBehaviours'


export default function Layout({children}) {

    const { ScrollToTop } = useScrollBehaviours()
    
    useEffect(() => {
        ScrollToTop()
    }, [])

    return (
        <>
        <Navbar />
        <div className="">
            {children}
        </div>
        <Footer />
        </>
    )
}
