import React from 'react'
import driverImg from 'Assets/Bg/driver.png'

import { SlideTop, SlideBottom, SlideLeft, SlideRight } from 'Components/SlideAnimation'


export default function Drivers(props) {

    const _style = {
        bg: {
            backgroundImage: `url(${driverImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
    }

    const _driverQuality = [
        {
            title: 'PRIVACY',
            description: "Your comfort and privacy are our priority; that is why all our chauffeurs sign and rigorously follow non-disclosure agreements so you can enjoy a stress-free ride.",

        },
        {
            title: 'QUALITY',
            description: "Our professional fleet staff is trained in all appropriate protocols and is ready to deliver exceptional service every step of the way.",

        },
        {
            title: 'SAFETY',
            description: "Our chauffeurs complete mandatory hands-on training and strictly follow COVID-19 regulations to ensure your safety on the road.",

        },
    ]

    const Box = ({ item }) => {

        return (
            <div>
                <SlideTop>

                <div className="text-2xl font-bold text-copper pb-12">{item?.title}</div>
                <div className="text-grey ">{item?.description}</div>
                </SlideTop>
            </div>
        )
    }


    return (
        <>
            <div id="drivers" style={_style.bg} className="">

                <div className="w-full h-full bg-black/80 py-20">
                    <div className="relative hidden sm:block">
                        <SlideRight>
                            <div className="h-[0.5px] w-96 bg-copper absolute -top-44 right-0"></div>
                        </SlideRight>
                        <SlideRight>
                            <div className="h-[0.5px] w-32 bg-copper absolute  right-0"></div>
                        </SlideRight>
                        <SlideLeft>
                            <div className="h-[0.5px] w-64 bg-copper absolute top-12 right-0"></div>
                        </SlideLeft>
                    </div>
                    <div className="container mx-auto ">
                        <div className="text-3xl font-bold text-white pb-20">
                            <SlideLeft>
                            Our drivers
                            </SlideLeft>
                        </div>
                        <div className="grid grid-cols-1  lg:grid-cols-3 gap-16">
                            {_driverQuality.map(item => <Box key={item.title} item={item} />)}
                        </div>
                    </div>
                    <div className="h-32 hidden sm:block">
                        <div className="relative">
                           
                            <SlideRight>
                                <div className="h-[0.5px] w-32 bg-copper absolute top-24"></div>
                            </SlideRight>
                            <SlideLeft>
                                <div className="h-[0.5px] w-64 bg-copper absolute top-32"></div>
                            </SlideLeft>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
