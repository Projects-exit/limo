import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import Layout from '../../Components/Layout'
import { Loader } from 'Components/Loader'
import { useParams } from 'react-router-dom'

import { Store } from 'Store/orderStore'


export default function Redirect(props) {

    const {priceId} = useParams()

    const _store = useContext(Store)
    const storeInputs = _store?.state?.order

    const [error, setError] = useState(false)

    const connectToPayment = async() => {
        try {

            const {from, to, date, time, name, email, phone, info, } = storeInputs
            const strapiStripeId = storeInputs?.car?.strapiStripeId

            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/reservation/createCheckOut`, {
                priceId : priceId,
                metadata : {from, to, date, time, name, email, phone, info, strapiStripeId}
            })

            const url = res?.data?.redirectURL || ''
            if (url) {
                window.location.href = url 
            } else {
                setError(true)
            }

        } catch (ex) {

        }
    }

    useEffect(() => {
        connectToPayment()
    }, [])
    

    return (
        <>
        {/* <Layout> */}
            <div className="flex justify-center items-center h-screen w-full">
                <div>

                <Loader height={70} width={70} />
                <div className="text-center text-copper pt-8 font-bold">
                    Securely redirecting to payment...
                </div>
                <div className="text-center text-copper pt-2 text-sm font-bold">
                    Please dont't hit back button.
                </div>
                </div>
            </div>
        {/* </Layout> */}
        </>
    )
}
