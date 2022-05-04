import Home from 'Pages/Home'
import Fleet from 'Pages/Fleet'
import Reservation from 'Pages/Reservation'
import Privacy from 'Pages/Privacy'

const routesList = [
    {
        path : '/',
        component :  <Home />
    },
    {
        path : '/fleet',
        component :  <Fleet />
    },
    {
        path : '/reservation',
        component :  <Reservation />
    },
    {
        path : '/privacy',
        component :  <Privacy />
    }
]

export default routesList