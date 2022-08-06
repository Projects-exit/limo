import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link, useNavigate , useParams} from 'react-router-dom'

import { SlideTop, SlideBottom, SlideLeft, SlideRight, JustAppear } from 'Components/SlideAnimation'

import { Button, ButtonFilled } from 'Components/Button'
import { CardGrey } from 'Components/Cards'
import Layout from 'Components/Layout'

import { CarDetail } from 'Pages/Fleet/CarDetail'
import { _carsList } from 'Pages/_carsList'

import { Store } from 'Store/orderStore'

// import { PickUpData } from 'Components/PickUpData';
// import { AddressData } from 'Components/AddressData';

import Ripple from 'Assets/Bg/ripple.svg'
import { Loader } from 'Components/Loader'
import { format } from 'date-fns'
import { isAnyValueEmpty } from 'Hooks/utils'

const qs = require('qs');

export default function PaymentDetails(props) {

    const _store = useContext(Store)
    const storeInputs = _store?.state?.order

    const [orderdata, setorderdata] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()


    const [inputs, setInputs] = useState({
        from: '',
        to: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        info: '',
        reservationId : ''
    })



    const { code } = useParams()

    const [error, setError] = useState('')

    const LoadPrice = async () => {
        setLoading(true)
        try {

            const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/reservation/getReservation`, {
                code
            })
            console.log(res?.data?.data)
            const temp =  res?.data?.data
            const {
                id : reservationId,
                pickup,
                destination,
                date,
                time,
                name,
                email,
                phone,
                info,
                strapi_stripe_product,
                quotePrice
            } = temp
            setInputs(prev => ({
                ...prev, 
                from : pickup,
                to : destination,
                date,
                time,
                name,
                email,
                phone,
                info,
                reservationId,
                quotePrice
                
            }))
            setorderdata(strapi_stripe_product)


        } catch (ex) {
            
            const error = ex?.response?.data?.error?.message
            setError(error ? error : "Something went wrong!")
        }
        setLoading(false)
    }

    const onBtnClick = () => {
        const query = qs.stringify({
            ...inputs,
            strapiStripeId : orderdata?.id,
            payment_code : code
            
          }, {
            encodeValuesOnly: true,
          });

        navigate(`${orderdata?.stripePriceId ? `/payment/${orderdata?.stripePriceId}/redirect?${query}` : '/payment/code'}`)
    }


    // const checkDataAndRedirect = () => {
    //     console.log("confirm",isAnyValueEmpty(inputs))
    //     // console.log(inputs)
    //     if(isAnyValueEmpty(storeInputs)){
    //         navigate('/reservation')
    //     }
    // }

    useEffect(() => {
        LoadPrice()
        // checkDataAndRedirect()
    }, [])



    // useEffect(() => {
    //     setInputs(prev => ({
    //         ...prev,
    //         ...storeInputs
    //     }))
    // }, [])



    // console.log(_store?.state)

    return (
        <>
            <Layout>
            <div
                style={{
                    background: ` url(${Ripple}), black`,
                    backgroundPosition: 'right -380px top -420px',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}
                className="  pt-44 pb-24">
                <div className="container mx-auto">
                    <div className="text-center text-2xl text-white pb-6 font-bold">
                        <JustAppear>
                            Checkout
                        </JustAppear>
                    </div>
                    <div className="h-[0.5px] w-full bg-copper mb-6"></div>
                    <JustAppear>
                        <div className='py-6'>
                            {loading ? <div className="w-fit mx-auto">
                                <Loader height={60}  width={60} />
                                <div className="text-center text-copper text-sm font-bold pt-5">
                                    Validating...
                                </div>
                            </div> :
                                <>
                                {
                                    error ? 
                                    <>
                                     <CardGrey className="max-w-sm mx-auto" >
                                        <div className="py-4 text-center text-red-500">
                                            {error}
                                        </div>
                                        <Link to="/payment/code">
                                        <ButtonFilled label="Retry" className="text-center w-full mx-auto w-fit text-sm" />
                                        </Link>
                                     </CardGrey>
                                    </> 
                                    
                                    :

                                    <CardGrey >
                                    <div className="flex flex-wrap justify-between">
                                        <div className='flex flex-col h-full justify-between'>
                                            <div>
                                                <div className="text-2xl text-white font-bold">
                                                    {storeInputs?.car?.brand}
                                                </div>
                                                <div className="text-xl font-bold text-copper pt-2">
                                                    {storeInputs?.car?.model}
                                                </div>
                                            </div>
                                            <div className="pt-4 max-w-sm">
                                                <img src={storeInputs?.car?.image} alt="" />
                                            </div>
                                            <div className="py-4 flex justify-between">
                                                <CarDetail
                                                    seat={storeInputs?.car?.seat}
                                                    luggage={storeInputs?.car?.luggage} />
                                                {/* <Link to="/fleet">
                                            <Button  label={<>Change&nbsp;Car</>} className="text-copper cursor-pointer text-sm"/>
                                       </Link> */}
                                            </div>
                                        </div>
                                        <div className="lg:w-full xl:w-fit max-w-xl">
                                            <DisplayDetails inputs={inputs} />
                                        </div>
                                        <div className='flex flex-col  justify-between w-full lg:w-fit'>
                                            <div className="">
                                                <DisplayPrice price={inputs?.quotePrice} />
                                            </div>
                                            <div className="py-4 text-right">
                                                {/* <button className="bg-copper ml-auto text-white px-5 py-2 rounded-2xl text-sm font-bold" type="button" id="SS_ProductCheckout" data-id={id} data-url="http://localhost:1337"> PAY NOW </button> */}
                                               {/* <Link to={`${orderdata?.stripePriceId ? `/payment/${orderdata?.stripePriceId}/redirect` : '/payment/code'}`}> */}
                                                <ButtonFilled 
                                                    onClick={() => onBtnClick()}
                                                    label="CHECK OUT" className="text-center w-full lg:w-fit lg:ml-auto text-sm" />
                                                {/* </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </CardGrey>
                                    
                                }
                                </>
                            }
                        </div>
                    </JustAppear>
                </div>
            </div>
            </Layout>
        </>
    )
}

const DisplayDetails = ({ inputs }) => {

    const list = ["from", "to", "date", "time", "name", "email", "phone", "info"]

    const _date = (date) => {
        if(date) {
           return format(new Date(date), 'dd/MM/yyyy')
        } 
    }


    const Row = ({ item }) => (<div className='flex text-white py-2'>
        <div className='grow font-bold text-copper'> {item} : </div>
        <div className='grow '>{`${inputs?.[item]}`} </div>
    </div>)

    return (
        <>
            <div className="div w-full py-12 lg:py-0 text-sm">
                <div className="font-bold text-white py-3">
                    Booking details
                </div>
                <div className='flex text-white py-2'>
                    <div className='w-24 font-bold text-copper text-right'> Name :</div>
                    <div className='grow pl-3'> {inputs?.name} </div>
                </div>
                <div className='flex text-white py-2'>
                    <div className='w-24 font-bold text-copper text-right'> Pick-up :</div>
                    <div className='grow pl-3'> {inputs?.from} </div>
                </div>
                <div className='flex text-white py-2'>
                    <div className='w-24 font-bold text-copper text-right'> Destination :</div>
                    <div className='grow pl-3'> {inputs?.to} </div>
                </div>
                <div className='flex text-white py-2'>
                    <div className='w-24 font-bold text-copper text-right'> date :</div>
                    <div className='grow pl-3'> {`${_date(inputs?.date)}`} </div>
                </div>
                <div className='flex text-white py-2'>
                    <div className='w-24 font-bold text-copper text-right'> Time :</div>
                    <div className='grow pl-3'> {inputs?.time} </div>
                </div>
                {/* <div className="font-bold text-white py-3">
                    User details
                </div> */}
            </div>
        </>
    )

}

const DisplayPrice = ({ price }) => {

    return (
        <div className="text-white  text-right py-12 lg:py-0">
            <div className="text-sm ">
                Price
            </div>
            <div className='text-6xl  font-bold'>
                $ {price}
            </div>
        </div>
    )
}