import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { Link, useNavigate , useParams} from 'react-router-dom'
import { SlideTop, SlideBottom, SlideLeft, SlideRight, JustAppear } from 'Components/SlideAnimation'

import { Button, ButtonFilled } from 'Components/Button'
import { CardGrey } from 'Components/Cards'


import { CarDetail } from 'Pages/Fleet/CarDetail'
import { _carsList } from 'Pages/_carsList'

import { Store } from 'Store/orderStore'

// import { PickUpData } from 'Components/PickUpData';
// import { AddressData } from 'Components/AddressData';

import Ripple from 'Assets/Bg/ripple.svg'
import { Loader } from 'Components/Loader'
import { format } from 'date-fns'
import { isAnyValueEmpty } from 'Hooks/utils'

export default function Confirmation(props) {

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
        info: ''
    })



    const { id } = useParams()

    const LoadPrice = async () => {
        setLoading(true)
        try {

            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/strapi-stripe/getProduct/${id}`)
            console.log(res)
            setorderdata(res?.data)

        } catch (ex) {

        }
        setLoading(false)
    }

    const checkDataAndRedirect = () => {
        console.log("confirm",isAnyValueEmpty(inputs))
        // console.log(inputs)
        if(isAnyValueEmpty(storeInputs)){
            navigate('/reservation')
        }
    }

    useEffect(() => {
        LoadPrice()
        checkDataAndRedirect()
    }, [])



    useEffect(() => {
        setInputs(prev => ({
            ...prev,
            ...storeInputs
        }))
    }, [])



    // console.log(_store?.state)

    return (
        <>

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
                            Confirm payment
                        </JustAppear>
                    </div>
                    <div className="h-[0.5px] w-full bg-copper mb-6"></div>
                    <JustAppear>
                        <div className='py-6'>
                            {loading ? <div className="w-fit mx-auto">
                                <Loader height={60}  width={60} />
                                <div className="text-center text-copper text-sm font-bold pt-5">
                                    Loading...
                                </div>
                            </div> :
                                <CardGrey >
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
                                        <div className='flex flex-col h-full justify-between'>
                                            <div>
                                                <div className="text-2xl text-white font-bold">
                                                    {storeInputs?.car?.title}
                                                </div>
                                                <div className="text-xl font-bold text-copper pt-2">
                                                    {storeInputs?.car?.sub}
                                                </div>
                                            </div>
                                            <div className="pt-4">
                                                <img src={storeInputs?.car?.image} alt="" />
                                            </div>
                                            <div className="pt-4 flex justify-between">
                                                <CarDetail
                                                    seat={storeInputs?.car?.seat}
                                                    luggage={storeInputs?.car?.luggage} />
                                                {/* <Link to="/fleet">
                                            <Button  label={<>Change&nbsp;Car</>} className="text-copper cursor-pointer text-sm"/>
                                       </Link> */}
                                            </div>
                                        </div>
                                        <div>
                                            <DisplayDetails inputs={inputs} />
                                        </div>
                                        <div className='flex flex-col h-full justify-between'>
                                            <div>
                                                <DisplayPrice price={orderdata?.price} />
                                            </div>
                                            <div className="pt-4 text-right">
                                                {/* <button className="bg-copper ml-auto text-white px-5 py-2 rounded-2xl text-sm font-bold" type="button" id="SS_ProductCheckout" data-id={id} data-url="http://localhost:1337"> PAY NOW </button> */}
                                               <Link to={`${orderdata?.stripePriceId ? `/payment/${orderdata?.stripePriceId}/redirect` : '/payment'}`}>
                                                <ButtonFilled 
                                                    // onClick={() => setCheckOut(true)}
                                                    label="CHECK OUT" className="text-center w-full lg:w-fit lg:ml-auto text-sm" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </CardGrey>
                            }
                        </div>
                    </JustAppear>
                </div>
            </div>

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
            <div className="div w-full">
                <div className="font-bold text-white py-3">
                    Booking details
                </div>
                <div className='flex text-white py-1'>
                    <div className='w-32 font-bold text-copper'> Name </div>
                    <div className='grow '>: {inputs?.name} </div>
                </div>
                <div className='flex text-white py-1'>
                    <div className='w-32 font-bold text-copper'> From </div>
                    <div className='grow '>: {inputs?.from} </div>
                </div>
                <div className='flex text-white py-1'>
                    <div className='w-32 font-bold text-copper'> To </div>
                    <div className='grow '>: {inputs?.to} </div>
                </div>
                <div className='flex text-white py-1'>
                    <div className='w-32 font-bold text-copper'> date </div>
                    <div className='grow '>: {`${_date(inputs?.date)}`} </div>
                </div>
                <div className='flex text-white py-1'>
                    <div className='w-32 font-bold text-copper'> Time </div>
                    <div className='grow '>: {inputs?.time} </div>
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
        <div className="text-white py-2 text-right">
            <div className="text-sm text-copper">
                Price
            </div>
            <div className='text-6xl  font-bold'>
                $ {price}
            </div>
        </div>
    )
}