import Home from 'Pages/Home'
import Fleet from 'Pages/Fleet'
import Reservation from 'Pages/Reservation'
import Privacy from 'Pages/Privacy'
import Payment from 'Pages/payment'
import Redirect from 'Pages/payment/Redirect'
import Fail from 'Pages/payment/Fail'
import Success from 'Pages/payment/success'


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
    },
    {
        path : '/payment/:id',
        component :  <Payment />
    },
    {
        path : '/payment/:priceId/redirect',
        component :  <Redirect />
    },
    {
        path : '/payment/status/fail',
        component :  <Fail />
    },
    {
        path : '/payment/status/success',
        component :  <Success />
    }
]

export default routesList