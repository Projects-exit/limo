import React, {useState, useEffect, useContext} from 'react'
import * as Yup from "yup";

import { Link, useNavigate } from 'react-router-dom'
import { SlideTop, SlideBottom, SlideLeft, SlideRight, JustAppear } from 'Components/SlideAnimation'

import { Button, ButtonFilled } from 'Components/Button'
import { CardGrey } from 'Components/Cards'


import {CarDetail} from 'Pages/Fleet/CarDetail'
// import { _carsList } from 'Pages/_carsList'

import { Store } from 'Store/orderStore'

import { PickUpData } from 'Components/PickUpData';
import { AddressData } from 'Components/AddressData';
import Ripple from 'Assets/Bg/ripple.svg'
// import Checkout from './Checkout'
// import Outsideclick from 'Hooks/OutsideClick'
// import {ReactComponent as Ripple} from 'Assets/Bg/ripple.svg'

export default function Reservation(props) {
    
    const _store = useContext(Store)
    const storeInputs = _store?.state?.order

    // const [checkOut, setCheckOut] = useState(false)
    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
        from : '',
        to : '',
        date : '',
        time : '',
        name : '',
        email : '',
        phone : '',
        info : ''
    })

    const [error, setError] = useState({})

    var phoneRegEx =  /^\(?(\d{3})\)?[ ]?(\d{3})[- ]?(\d{4})$/;

    const Schema = Yup.object({
        // info: Yup.string().required("Additional info  is a required field"),
        phone: Yup.string().required("Phone is a required field").min(7,'Invalid phone number'),
        name: Yup.string().required("Name is a required field"),
        email: Yup.string().required("Email is a required field").email("Invalid email"),
        time: Yup.string().required("Time is a required field"),
        date: Yup.string().required("Date is a required field"),
        to: Yup.string().required("Destination is a required field"),
        from: Yup.string().required("Pick up is a required field"),

    });


    const handleChange = (val) => {
        console.log(val)
        setInputs(prev => ({
            ...prev,
            ...val
        }));
    };

    const updateStore = () => {
        
        _store.dispatch({
            type: 'initOrder',
            payload: inputs
        })
    }

    const callChangeCar = () => {
        updateStore()
    }

    useEffect(() => {
        setInputs(prev => ({
            ...prev,
            ...storeInputs
        }))
    }, [])

    const RedirectToConfirmationPage = async() => {
        try {
            const _inputs = {...inputs, from : inputs?.from?.label, to : inputs?.to?.label}
            await Schema.validate(_inputs)
            // console.log(_store)
            navigate(`/reservation/confirmation/${storeInputs?.car?.id}`)
        } catch(ex) {
            setError({ message: ex?.errors ?? 'Error' })
        }
    }

    useEffect(() =>{
        updateStore()
    }, [inputs])

    useEffect(() => {
        if(!storeInputs?.car?.id) {
            navigate('/fleet/pick')
        }
    }, [])

    // console.log(_store?.state)

    return (
        <>      
            {/* <div className="relative">
                <div className="absolute flex justify-end w-full top-0 right-0 overflow-hidden">
                    <Ripple className='-translate-y-[360px]  translate-x-[310px]' />
                </div>
            </div> */}
            {/* {checkOut && 
            <div className="fixed w-full h-full bg-black/20 backdrop-blur-sm z-30">
                    <div className="w-full max-w-lg mx-auto">
                        <Outsideclick onOutsideClick={() => setCheckOut(false)}>
                                <Checkout />
                        </Outsideclick>
                    </div>
            </div>
            } */}
             <div 
                style={{
                    background : ` url(${Ripple}), black`,
                    backgroundPosition : 'right -380px top -420px',
                    backgroundSize : 'contain',
                    backgroundRepeat : 'no-repeat'
                }}
                className="  pt-44 pb-24">
                <div className="container mx-auto">
                    <div className="text-center text-2xl text-white pb-6 font-bold">
                        <JustAppear>
                        Car reservation
                        </JustAppear>
                    </div>
                    <div className="h-[0.5px] w-full bg-copper mb-6"></div>
                    <JustAppear>
                    <div className='py-6'>
                       <CardGrey >
                           <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
                               <div className='flex flex-col h-full justify-between'>
                                   <div>
                                        <div className="text-2xl text-white font-bold">
                                                {storeInputs?.car?.brand}
                                        </div>
                                        <div className="text-xl font-bold text-copper pt-2">
                                                {storeInputs?.car?.model}
                                        </div>
                                   </div>
                                   <div className="pt-4">
                                        <img src={storeInputs?.car?.image} alt="" />
                                   </div>
                                   <div className="pt-4 flex justify-center sm:justify-between flex-wrap sm:flex-nowrap">
                                       <CarDetail 
                                            seat={storeInputs?.car?.seat} 
                                            luggage={storeInputs?.car?.luggage} />
                                       <Link to="/fleet/pick">
                                            <Button  label={<>Change&nbsp;Car</>} className="text-copper cursor-pointer text-sm mt-4 sm:mt-0"/>
                                       </Link>
                                   </div>
                               </div>
                               <div>
                                   <PickUpData 
                                    inputs={inputs}
                                    handleChange={handleChange}
                                    className="w-full py-2" />
                                    
                               </div>
                               <div>
                                   <AddressData
                                    inputs={inputs}
                                    handleChange={handleChange}
                                    />
                                        <div className="text-xs text-red-500 pt-2 text-center font-bold font-sans">
                                            {error?.message}
                                        </div>
                                   <div className="pt-4">
                                        {/* <button class="css style" type="button" id="SS_ProductCheckout" data-id="1" data-url="http://localhost:1337"> Buy Now </button> */}
                                       <ButtonFilled 
                                        onClick={() => RedirectToConfirmationPage()}
                                        label="Check Out" className="text-center w-full lg:w-fit lg:ml-auto text-sm" />
                                   </div>
                               </div>
                           </div>
                       </CardGrey>
                    </div>
                    </JustAppear>
                </div>
            </div>

        </>
    )
}
