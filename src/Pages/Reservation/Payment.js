import React, {useState, useEffect, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SlideTop, SlideBottom, SlideLeft, SlideRight, JustAppear } from 'Components/SlideAnimation'

import { Button, ButtonFilled } from 'Components/Button'
import { CardGrey } from 'Components/Cards'


import {CarDetail} from 'Pages/Fleet/CarDetail'
import { _carsList } from 'Pages/_carsList'

import { Store } from 'Store/orderStore'

import { PickUpData } from 'Components/PickUpData';
import { AddressData } from 'Components/AddressData';
import Ripple from 'Assets/Bg/ripple.svg'
// import Checkout from './Checkout'
// import Outsideclick from 'Hooks/OutsideClick'
// import {ReactComponent as Ripple} from 'Assets/Bg/ripple.svg'

export default function Payment(props) {
    
    const _store = useContext(Store)
    const storeInputs = _store?.state?.order

    const [checkOut, setCheckOut] = useState(false)
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

    const isInputsEmpty = (obj) => {
        let isEmpty = true
         Object.keys(obj).some(key => {
             if(obj[key] !== '') {
                isEmpty = false
                 return true
                 
             }
         })
         return isEmpty
    }

    const handleChange = (val) => {
        
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

    useEffect(() =>{
        updateStore()
    }, [inputs])

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
                                       <Link to="/fleet">
                                            <Button  label={<>Change&nbsp;Car</>} className="text-copper cursor-pointer text-sm"/>
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
                                   <div className="pt-4">
                                        {/* <button class="css style" type="button" id="SS_ProductCheckout" data-id="1" data-url="http://localhost:1337"> Buy Now </button> */}
                                       <ButtonFilled 
                                        onClick={() => navigate(`/payment/${storeInputs?.car?.strapiStripeId}`)}
                                        label="PAYMENT" className="text-center w-full lg:w-fit lg:ml-auto text-sm" />
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
