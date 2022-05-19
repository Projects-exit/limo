import React from 'react'
// import StripeContainer from './stripeContainer'
import Confirmation from './Confirmation'
import Layout from './Layout'
import { EntryScreen, ChangeScreen } from 'Components/SplashScreens'


export default function Index(props) {
    

    return (
        <>
        <Layout>
            <EntryScreen/>
            <ChangeScreen />
            <Confirmation />
       </Layout>
        </>
    )
}
