import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { Link, useNavigate , useParams} from 'react-router-dom'
import { SlideTop, SlideBottom, SlideLeft, SlideRight, JustAppear } from 'Components/SlideAnimation'

import { Button, ButtonFilled } from 'Components/Button'
import { CardGrey } from 'Components/Cards'


import { Store } from 'Store/orderStore'

// import { PickUpData } from 'Components/PickUpData';
// import { AddressData } from 'Components/AddressData';

import Ripple from 'Assets/Bg/ripple.svg'
import { Loader } from 'Components/Loader'

import OtpInput from 'react-otp-input';


export default function Confirmation(props) {

    const _store = useContext(Store)

    
    const [loading, setLoading] = useState(false)
    const [code, setcode] = useState(false)

    const navigate = useNavigate()


    const handleBtnClick = () => {
        navigate(`/payment/details/${code}`)
        // validateCode()
    }


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
                            Enter the code
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
                                <CardGrey className="w-full lg:max-w-xl mx-auto" >
                                        <div className="py-4 text-white font-bold text-center">
                                        Enter payment code that <br/>
                                        we privides you
                                        </div>
                                        <div className="py-4 w-fit mx-auto">
                                            <OtpInput
                                                inputStyle={{width : '35px', height : '45px', borderRadius : '10px', margin : '5px', backgroundColor : 'transparent', color : 'white', border : '1px solid #B9884F'}}
                                                value={code}
                                                onChange={(e) => setcode(e)}
                                                numInputs={6}
                                                // separator={}
                                            
                                            />
                                        </div>
                                  
                                            <div className="pt-4 text-right">
                                                {/* <button className="bg-copper ml-auto text-white px-5 py-2 rounded-2xl text-sm font-bold" type="button" id="SS_ProductCheckout" data-id={id} data-url="http://localhost:1337"> PAY NOW </button> */}
                                               {/* <Link to={`/payment`}> */}
                                                <ButtonFilled 
                                                    onClick={() => handleBtnClick()}
                                                    label="Next" className="text-center w-full lg:w-fit mx-auto text-sm" />
                                                {/* </Link> */}
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
