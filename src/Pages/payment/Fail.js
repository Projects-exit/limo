import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { ButtonFilled } from 'Components/Button';

import Layout from '../../Components/Layout'
import { CardGrey } from 'Components/Cards'
import { Loader } from 'Components/Loader'


export default function Fail(props) {

    const params = new URLSearchParams(document.location.search);

    const checkoutSessionId = params.get("session_id");

    const [loading, setloading] = useState(true)
    const [retry, setRetry] = useState('')

    const getCheckOutStatus = async () => {
        setloading(true)

        try {

            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/reservation/getCheckOutStatus`, {
                sessionId: checkoutSessionId
            })
            const url = res?.data?.data?.url
            setRetry(url)
            console.log(url)

        } catch (ex) {

        }
        setloading(false)
    }

    useEffect(() => {
        // console.log(checkoutSessionId)
        getCheckOutStatus()
    }, [])


    return (
        <>
            <Layout>
                <div className="py-32">

                    {loading ? <div className="w-fit mx-auto">
                        <Loader height={60} width={60} />
                        <div className="text-center text-copper text-sm font-bold pt-5">
                            Loading...
                        </div>
                    </div>
                        :
                        <CardGrey className="mx-auto w-full max-w-xl" >
                            <div className="p-3">
                                <div className="text-center text-white font-bold text-2xl">
                                    Ooops! <br />
                                    <div className="text-[#EB5757]">
                                        Payment failed!
                                    </div>
                                </div>

                                <div className="pt-12">
                                    <ButtonFilled
                                        onClick={() => {
                                            if (retry) {
                                                window.location.href = retry
                                            }
                                        }}
                                        label="Retry" className="w-fit mx-auto" />
                                </div>
                            </div>
                        </CardGrey>
                    }
                </div>
            </Layout>

        </>
    )
}
