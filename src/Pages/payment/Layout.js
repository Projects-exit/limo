
import Navbar from 'Pages/Navbar'
import Footer from 'Pages/Footer'

export default function Layout({children}) {
    

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
