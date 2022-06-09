import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'


import { CardGrey } from 'Components/Cards'
import { Button, ButtonFilled } from 'Components/Button'
import { Loader } from 'Components/Loader'

import { Store } from 'Store/orderStore'
import { Link } from 'react-router-dom'

export default function OTP(props) {

    const {setCheckout} = props

    const [loading, setLoading] = useState(true)

    const _store = useContext(Store)
    const storeInputs = _store?.state?.order

    const [error, setError] = useState(false)

    const [otp, setOtp] = useState('')

    const requestReservation = async () => {
        setLoading(true)
        try {

            const { from, to, date, time, name, email, phone, info, } = storeInputs
            const strapiStripeId = storeInputs?.car?.strapiStripeId

            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/reservation/createReservation`, {
                from, to, date, time, name, email, phone, info, strapiStripeId
            })

            console.log(res?.data?.data)
            const _opt = res?.data?.data?.order_number
            setOtp(_opt)

        } catch (ex) {
            setError(true)
        }
        setLoading(false)

    }

    useEffect(() => {
        requestReservation()
    }, [])



    return (
        <>
            <div className="fixed z-40 h-screen w-full bg-black/90">
                <div className="flex justify-center items-center w-full h-screen">
                    <CardGrey className="w-full max-w-lg text-center">
                        {loading ? <div className="w-fit mx-auto">
                            <Loader height={60} width={60} />
                            <div className="text-center text-copper text-sm font-bold pt-5">
                                Requesting...
                            </div>
                        </div> :
                            <>
                                {error ?
                                    <div className='py-8'>
                                        <div className=" text-2xl font-bold text-white">
                                            Oops! <br />
                                            Something went wrong <br />
                                        </div>
                                        <div className="pt-8">
                                            <ButtonFilled 
                                                onClick={() => { setCheckout(false)}}
                                                label="TRY AGAIN" className="text-center w-fit mx-auto text-sm" />
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <div className=" text-2xl font-bold text-white">
                                            Thanks! <br />
                                            We will contact<br />
                                            You soon!
                                        </div>
                                        <div className="pt-8 text-white">
                                            Your order number:
                                        </div>
                                        <div className="py-2 text-copper text-2xl font-bold">
                                            {otp}
                                        </div>
                                        <div className="pt-8">
                                            <Link to="/">
                                            <ButtonFilled label="HOME" className="text-center w-fit mx-auto text-sm" />
                                            </Link>
                                        </div>
                                    </div>
                                }

                            </>
                        }
                    </CardGrey>
                </div>
            </div>

        </>
    )
}
