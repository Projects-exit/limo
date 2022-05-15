import React from 'react'

import qaualityImg from 'Assets/Bg/quality.png';
import {ReactComponent as Ripple} from 'Assets/Bg/ripple.svg'

import { QualityDetails } from './QualityDetails';

import { SlideTop, SlideBottom, SlideLeft, SlideRight, JustAppear } from 'Components/SlideAnimation'

export default function Quality(props) {


    return (
        <>
            <div className="w-full bg-black   ">
                <div className="">
                    <div className="relative h-[1050px] lg:h-[800px] ">
                        
                        <div className="absolute w-full   z-20 ">
                            <div className="container  mx-auto  mt-12">

                            <div className="flex flex-wrap bg-grey">
                                <div className="w-full lg:w-4/12">
                                    <img src={qaualityImg} className="w-full h-full" alt="" />
                                </div>
                                <div className="w-full lg:w-8/12">
                                    <div className="p-[30px] text-left">
                                        <div className="pb-4 text-copper font-bold">
                                            <SlideLeft>
                                                Some of our keys
                                            </SlideLeft>
                                        </div>
                                        <div className="text-3xl text-white font-bold pb-12">
                                            <SlideLeft>
                                                Quality services
                                            </SlideLeft>
                                        </div>
                                        <JustAppear>

                                        <QualityDetails />
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

