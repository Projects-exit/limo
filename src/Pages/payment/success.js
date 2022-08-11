import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'

import { Link } from 'react-router-dom';
import axios from 'axios'
import { ButtonFilled } from 'Components/Button';

import { Loader } from 'Components/Loader'
import { CardGrey } from 'Components/Cards'
import { JustAppear } from 'Components/SlideAnimation';
// import { _carsList } from 'Pages/_carsList';
import { format } from 'date-fns';



export default function Success(props) {

    const params = new URLSearchParams(document.location.search);

    const checkoutSessionId = params.get("session_id");

    const [retry, setRetry] = useState('')
    const [loading, setloading] = useState('')
    const [metaData, setmetaData] = useState({})

    // const _car = _carsList.find(item => item?.strapiStripeId === metaData?.strapiStripeId)

    const getCheckOutStatus = async () => {
        setloading(true)

        try {

            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/reservation/getCheckOutStatus`, {
                sessionId: checkoutSessionId
            })
            const metdata = res?.data?.data?.metadata
            setmetaData(metdata)
            console.log(metdata)

        } catch (ex) {

        }
        setloading(false)
    }

    const _date = (date) => {
        if(date){
            return format(new Date(date), 'dd/MM/yyyy')
        }
    }

    useEffect(() => {
        // console.log(checkoutSessionId)
        getCheckOutStatus()
    }, [])

    return (
        <>
            <Layout>
                <div className="pt-24">
                    <div className="container mx-auto">

                        <JustAppear>
                            <div className='py-6'>
                                {loading ? <div className="w-fit mx-auto">
                                    <Loader height={60} width={60} />
                                    <div className="text-center text-copper text-sm font-bold pt-5">
                                        Loading...
                                    </div>
                                </div> :
                                    <CardGrey className="mx-auto w-full max-w-xl" >
                                        <div className="p-3">
                                            <div className="text-center text-white font-bold text-2xl">
                                            Congratulations, <br/> 
                                            you successfully booked a car!

                                            </div>
                                               
                                                <div className="pt-12">
                                                    <Link to="/">
                                                    <ButtonFilled label="HOME" className="mx-auto w-fit" />
                                                    </Link>
                                                </div>
                                        </div>
                                    </CardGrey>
                                }
                            </div>
                        </JustAppear >
                    </div>

                </div>
            </Layout>
        </>
    )
}
