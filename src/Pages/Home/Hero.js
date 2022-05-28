import React from 'react'
import { Link } from 'react-router-dom'

// ** assets
import carImage from 'Assets/Bg/hero_car.png'
import { ReactComponent as ScrollBar } from 'Assets/Misc/scroll2.svg'
import { ReactComponent as Ripple } from 'Assets/Bg/ripple.svg'
import { Button } from 'Components/Button'

// **animations
import { SlideTop, SlideBottom, SlideLeft, SlideRight, JustAppear } from 'Components/SlideAnimation'

export default function Hero(props) {


    return (
        <>
            <div className="relative">
                <div className="absolute flex justify-end w-full top-0 right-0 overflow-hidden">
                    <Ripple className='-translate-y-[360px] translate-x-[200px]   sm:translate-x-[310px]' />
                </div>
            </div>
            <div className="relative z-10 hero   pt-20   w-full bg-red-">
                <div className=" mx-auto ">
                    <div className="">
                        <div className="text-center px-4 pt-16 ">
                            <JustAppear>
                                <div className="w-fit mx-auto">

                            <Link to="/fleet" >
                                <Button label="Reserve Now" className="text-center px-14 mr-auto lg:mx-auto w-fit cursor-pointer" />
                            </Link>
                                </div>
                            </JustAppear>
                        </div>
                        <div className="px-4   py-2 text-grey-l text-4xl sm:text-7xl w-44 sm:w-full text-left sm:text-center   uppercase font-bold  z-20">
                            <SlideLeft  >
                                Limousine service
                            </SlideLeft>
                            <SlideRight >
                                at Your doorstep
                            </SlideRight>
                        </div>
                        <div className="relative h-[200px] lg:h-[380px] xl:h-[450px] -translate-y-16">
                            <div className="hidden sm:block">

                                <SlideRight>
                                    <div className="h-[0.5px] w-32 bg-copper absolute top-24"></div>
                                </SlideRight>
                                <SlideLeft>
                                    <div className="h-[0.5px] w-64 bg-copper absolute top-32"></div>
                                </SlideLeft>
                                <SlideLeft>
                                    <div className="h-[0.5px] w-44 bg-copper absolute right-24 -top-8"></div>
                                </SlideLeft>
                                <SlideRight>
                                    <div className="h-[0.5px] w-44 bg-copper absolute top-56 right-0"></div>
                                </SlideRight>
                                <SlideLeft>

                                    <div className="h-[0.5px] w-24 bg-copper absolute top-64 right-0"></div>
                                </SlideLeft>
                            </div>
                            {/* =============== Car ============== */}
                            <div className="absolute w-full text-center">
                                <JustAppear>
                                <img src={carImage} alt="" className='z-10 w-full  max-w-7xl mx-auto' />
                                </JustAppear>
                            </div>
                        </div>
                        <div className="relative ">
                            <div className="absolute flex justify-center w-full  h-96 overflow-hidden">
                                <Ripple className='-translate-y-36  translate-x-64' />
                            </div>
                            <SlideTop>
                                <div className='hidden lg:flex justify-center absolute w-full -translate-y-14 items-center z-30 bg-transparent'>
                                    <div className="h-[0.5px] w-44 bg-copper "></div>
                                    <ScrollBar className='mx-8' />
                                    <div className="h-[0.5px] w-44 bg-copper "></div>
                                </div>
                            </SlideTop>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

