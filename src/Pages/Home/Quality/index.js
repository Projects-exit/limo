import React, { useState } from 'react'

import qaualityImg from 'Assets/Bg/quality.png';
import {ReactComponent as Ripple} from 'Assets/Bg/ripple.svg'

import { QualityDetails } from './QualityDetails';

import { SlideTop, SlideBottom, SlideLeft, SlideRight, JustAppear } from 'Components/SlideAnimation'

export default function Quality(props) {

    const [activeGlobal, setActiveGlobal] = useState()

    return (
        <>
            <div className="w-full bg-black   ">
                <div className="">
                    <div className="relative h-[1050px] lg:h-[700px] ">
                        
                        <div className="absolute w-full   z-10 ">
                            <div className="container  mx-auto  mt-12">

                            <div className="flex flex-wrap bg-grey">
                                {/* On desktop */}
                                <div 
                                    style={{
                                        backgroundImage : `url(${activeGlobal?.image})`,
                                        backgroundSize : 'cover'
                                    }}
                                    className="hidden lg:block w-full lg:w-4/12  text-white">
                                    {/* <img src={activeGlobal?.image} className="w-full " alt="" /> */}
                                    {/* {activeGlobal?.title} */}
                                </div>
                                {/* on Mobile */}
                                <div className="block lg:hidden w-full lg:w-4/12  text-white">
                                    <img src={activeGlobal?.image} className="w-full h-full" alt="" />
                                </div>
                                <div className="w-full lg:w-8/12">
                                    <div className="p-[30px] text-left">
                                        {/* <div className="pb-4 text-copper font-bold">
                                            <SlideLeft>
                                                Some of our keys
                                            </SlideLeft>
                                        </div> */}
                                        <div className="text-2xl sm:text-3xl text-white font-bold pb-12">
                                            <SlideLeft>
                                                Attending events
                                            </SlideLeft>
                                        </div>
                                        <JustAppear>

                                        <QualityDetails setActiveGlobal={setActiveGlobal} />
                                        </JustAppear>
                                    </div>
                                </div>
                            </div>
                            </div>

                        </div>
                        <div className="absolute bottom-0 flex justify-start w-full  overflow-hidden h-[600px]">
                            <Ripple className='translate-y-32  -translate-x-44' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

