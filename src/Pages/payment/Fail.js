import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { ButtonFilled } from 'Components/Button';

import Layout from '../../Components/Layout'


export default function Fail(props) {

    const params = new URLSearchParams(document.location.search);

    const checkoutSessionId = params.get("session_id");

    const [retry, setRetry] = useState('')

    const getCheckOutStatus = async() => {


        try{

            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/reservation/getCheckOutStatus`, {
                sessionId : checkoutSessionId
            })
            const url = res?.data?.data?.url
            setRetry(url)
            console.log(url)

        } catch(ex) {

        }
    }

    useEffect(() => {
        console.log(checkoutSessionId)
        getCheckOutStatus()
    }, [])
    

    return (
        <>
        <Layout>
            <div className="py-56">
                <div className="text-4xl text-copper text-center">
                    :( Payment failed!
                </div>
                <div className="text text-center text-white max-w-sm mx-auto mt-4">
                    Something went wrong
                </div>
                <div className="text-center text-center mt-8">
                    <ButtonFilled 
                        onClick={() => { 
                            if(retry) {
                                window.location.href = retry
                            }}}
                        label="Retry" className="w-fit mx-auto" />
                    
                </div>
            </div>
        </Layout>

        </>
    )
}
