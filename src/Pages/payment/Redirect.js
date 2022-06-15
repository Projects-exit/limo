import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

// import Layout from '../../Components/Layout'
import { Loader } from 'Components/Loader'
import { useParams, useSearchParams, Link } from 'react-router-dom'

import { Button, ButtonFilled } from 'Components/Button'

// import { Store } from 'Store/orderStore'


export default function Redirect(props) {

    const { priceId } = useParams()

    const [searchParams, setSearchParams] = useSearchParams()

    // const _store = useContext(Store)
    // const storeInputs = _store?.state?.order
    // const params = [];

    const _searchParams = Object.fromEntries([...searchParams])

    const [error, setError] = useState(false)


    const connectToPayment = async () => {
        try {

            const { from, to, date, time, name, email, phone, info, strapiStripeId, payment_code, reservationId } = _searchParams

            const metadata = { from, to, date, time, name, email, phone, info, strapiStripeId, payment_code, reservationId }
            // const {from, to, date, time, name, email, phone, info, } = storeInputs
            // const strapiStripeId = storeInputs?.car?.strapiStripeId

            // console.log(from)

            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/reservation/createCheckOut`, {
                priceId: priceId,
                metadata
            })

            const url = res?.data?.redirectURL || ''
            if (url) {
                // console.log(url)
                window.location.href = url
            } else {
                setError(true)
            }

        } catch (ex) {
            const error = ex?.response?.data?.error?.message
            setError(error ? error : "Something went wrong!")
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
                    {error ?
                        <div>
                        <div className="text-center text-red-500 pt-8 pb-3 font-bold">
                            {error}
                        </div>
                            <Link to="/payment/code">
                                <ButtonFilled label="Retry" className="text-center w-full mx-auto w-fit text-sm" />
                            </Link>
                        </div>
                        :
                        <div>

                            <Loader height={70} width={70} />
                            <div className="text-center text-copper pt-8 font-bold">
                                Securely redirecting to payment...
                            </div>
                            <div className="text-center text-copper pt-2 text-sm font-bold">
                                Please dont't hit back button.
                            </div>
                        </div>

                    }
                </div>

            </div>
            {/* </Layout> */}
        </>
    )
}
