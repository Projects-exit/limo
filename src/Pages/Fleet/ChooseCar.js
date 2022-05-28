import React from 'react'

import { _carsList } from 'Pages/_carsList'
import { ReactComponent as Ripple } from 'Assets/Bg/ripple.svg'

import { CarCard } from './CarCard'
import { SlideLeft, SlideRight } from 'Components/SlideAnimation'

export default function ChooseCar(props) {


    return (
        <>
            <div className="bg-black">
                <div className="relative">
                    <div className="relative">
                        <div className="absolute flex justify-end w-full top-0 right-0 overflow-hidden">
                            <Ripple className='-translate-y-[360px] translate-x-[200px]   sm:translate-x-[310px]' />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    {/* <div className="text-center text-2xl text-white pb-6 font-bold">
                        Choose a  car
                    </div> */}
                    {/* <div className="h-[0.5px] w-full bg-copper mb-6"></div> */}
                    <div className="pt-24 relative">
                        <div className="text-8xl text-grey-l font-bold translate-y-14">
                            OUR FLEET
                        </div>
                    </div>
                    <div className="relative hidden sm:block">
                        <SlideRight>
                            <div className="h-[0.5px] w-96 bg-copper absolute -top-8 right-0"></div>
                        </SlideRight>
                        <SlideRight>
                            <div className="h-[0.5px] w-44 bg-copper absolute top-[200px] -right-[150px]"></div>
                        </SlideRight>
                        <SlideLeft>
                            <div className="h-[0.5px] w-64 bg-copper absolute top-[250px] -right-[250px]"></div>
                        </SlideLeft>
                        {/* ================ */}
                        <SlideRight>
                            <div className="h-[0.5px] w-44 bg-copper absolute top-[370px] -left-[250px]"></div>
                        </SlideRight>
                        <SlideLeft>
                            <div className="h-[0.5px] w-64 bg-copper absolute top-[420px] -left-[250px]"></div>
                        </SlideLeft>

                    </div>
                    <div className='pb-8 relative z-20'>
                        {_carsList.map(item => {

                            return (<CarCard item={item} key={item?.id} />)
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

