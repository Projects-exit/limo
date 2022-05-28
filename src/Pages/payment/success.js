import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout'

import { Link } from 'react-router-dom';
import axios from 'axios'
import { ButtonFilled } from 'Components/Button';

import { Loader } from 'Components/Loader'
import { CardGrey } from 'Components/Cards'
import { JustAppear } from 'Components/SlideAnimation';
import { _carsList } from 'Pages/_carsList';
import { format } from 'date-fns';



export default function Success(props) {

    const params = new URLSearchParams(document.location.search);

    const checkoutSessionId = params.get("session_id");

    const [retry, setRetry] = useState('')
    const [loading, setloading] = useState('')
    const [metaData, setmetaData] = useState({})

    const _car = _carsList.find(item => item?.strapiStripeId === metaData?.strapiStripeId)

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
                                        Verifying reservation...
                                    </div>
                                </div> :
                                    <CardGrey >
                                        <div className="p-3">
                                            <div className="text-center text-white font-bold">
                                                <div className="flex justify-center items-center text-2xl ">

                                                    <svg xmlns="http://www.w3.org/2000/svg" fill='green' width="32" height="32" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z" /></svg>
                                                    &nbsp;&nbsp;
                                                    Reservation sucessfull
                                                </div>
                                                <div className="pt-4">
                                                    {
                                                        _car && <>
                                                            <div className="text-center">
                                                                <img src={_car?.image} alt="" className='mx-auto' />
                                                            </div>
                                                        </>}
                                                </div>
                                                <div className="pt-4 text-white">
                                                    <div className="w-fit mx-auto">
                                                        <div className="flex pt-2 text-left w-full">
                                                            <div className="grow mr-16">From  </div>
                                                            <div className="grow">: {metaData.from}</div>
                                                        </div>
                                                        <div className="flex pt-2 text-left  w-full">
                                                            <div className="grow mr-16">to  </div>
                                                            <div className="grow">: {metaData.to}</div>
                                                        </div>
                                                        <div className="flex pt-2 text-left  w-full">
                                                            <div className="grow mr-16">date  </div>
                                                            <div className="grow">: {(_date(metaData?.date))}</div>
                                                        </div>
                                                        <div className="flex pt-2 text-left  w-full">
                                                            <div className="grow mr-16">time  </div>
                                                            <div className="grow">: {metaData?.time}</div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="pt-16">
                                                    <Link to="/">
                                                    <ButtonFilled label="Go to home" className="mx-auto w-fit" />
                                                    </Link>
                                                </div>
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
