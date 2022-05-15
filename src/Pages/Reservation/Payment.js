import React from 'react'
import { CardGrey } from 'Components/Cards'
import {CarDetail} from 'Pages/Fleet/CarDetail'
import { Button, ButtonFilled } from 'Components/Button'
import { SlideTop, SlideBottom, SlideLeft, SlideRight, JustAppear } from 'Components/SlideAnimation'

import { _carsList } from 'Pages/_carsList'



import { PickUpData } from 'Components/PickUpData';
import { AddressData } from 'Components/AddressData';
import Ripple from 'Assets/Bg/ripple.svg'
// import {ReactComponent as Ripple} from 'Assets/Bg/ripple.svg'
import { Link } from 'react-router-dom'

export default function Payment(props) {
    

    return (
        <>      
            {/* <div className="relative">
                <div className="absolute flex justify-end w-full top-0 right-0 overflow-hidden">
                    <Ripple className='-translate-y-[360px]  translate-x-[310px]' />
                </div>
            </div> */}
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
                                                Mercedes-Benz
                                        </div>
                                        <div className="text-xl font-bold text-copper pt-2">
                                                S-Class
                                        </div>
                                   </div>
                                   <div className="pt-4">
                                        <img src={_carsList[0]?.image} alt="" />
                                   </div>
                                   <div className="pt-4 flex justify-between">
                                       <CarDetail seat={3} luggage={3} />
                                       <Link to="/fleet">
                                            <Button  label="CHANGE CAR" className="text-copper cursor-pointer"/>
                                       </Link>
                                   </div>
                               </div>
                               <div>
                                   <PickUpData className="w-full py-2" />
                               </div>
                               <div>
                                   <AddressData />
                                   <div className="pt-4">
                                       <ButtonFilled label="PAYMENT" className="text-center w-full lg:w-fit lg:ml-auto text-sm" />
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