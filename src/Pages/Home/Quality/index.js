import React from 'react'

import qaualityImg from 'Assets/Bg/quality.png';
import {ReactComponent as Ripple} from 'Assets/Bg/ripple.svg'

import { QualityDetails } from './QualityDetails';


export default function Quality(props) {


    return (
        <>
            <div className="w-full bg-black   ">
                <div className="">
                    <div className="relative h-[950px] lg:h-[800px] ">
                        
                        <div className="absolute w-full   z-20 ">
                            <div className="container  mx-auto  mt-12">

                            <div className="flex flex-wrap bg-grey">
                                <div className="w-full lg:w-4/12">
                                    <img src={qaualityImg} className="w-full h-full" alt="" />
                                </div>
                                <div className="w-full lg:w-8/12">
                                    <div className="p-[30px] text-left">
                                        <div className="pb-4 text-copper font-bold">
                                            Some of our keys
                                        </div>
                                        <div className="text-3xl text-white font-bold pb-12">
                                            Quality services
                                        </div>
                                        <QualityDetails />
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

