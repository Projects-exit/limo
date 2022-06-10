import React from 'react'
// import StripeContainer from './stripeContainer'
import PaymentCode from './PaymentCode'
import Layout from '../../Components/Layout'
import { EntryScreen, ChangeScreen } from 'Components/SplashScreens'


export default function Index(props) {
    

    return (
        <>
        <Layout>
            <EntryScreen/>
            {/* <ChangeScreen /> */}
            <PaymentCode />
       </Layout>
        </>
    )
}
