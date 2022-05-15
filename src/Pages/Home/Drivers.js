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
            title: 'Discreet',
            description: "Confidentially non-disclosure agreements are signed and enforced for passenger privacy and peace-of-mind.",

        },
        {
            title: 'Professional',
            description: "Classroom trained in proper etiquette to interact in a business professional manner at all times for the duration the ride.",

        },
        {
            title: 'Safe',
            description: "On the road training is taught and reinforced with safe driving techniques along with proper Covid-19 protocols.",

        },
    ]

    const Box = ({ item }) => {

        return (
            <div>
                <SlideTop>

                <div className="text-copper pb-12">{item?.title}</div>
                <div className="text-grey">{item?.description}</div>
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
                            <div className="h-[0.5px] w-32 bg-copper absolute  right-0"></div>
                        </SlideRight>
                        <SlideLeft>
                            <div className="h-[0.5px] w-64 bg-copper absolute top-12 right-0"></div>
                        </SlideLeft>
                    </div>
                    <div className="container mx-auto ">
                        <div className="text-3xl text-white pb-20">
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
