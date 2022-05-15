import React from 'react'
import driverImg from 'Assets/Bg/driver.png'

export default function Drivers(props) {

    const _style = {
        bg: {
            backgroundImage: `url(${driverImg})`,
            backgroundSize: 'cover',
            backgroundPosition : 'center'
        }
    }

    const _driverQuality = [
        {
            title : 'Discreet',
            description : "Confidentially non-disclosure agreements are signed and enforced for passenger privacy and peace-of-mind.",

        },
        {
            title : 'Professional',
            description : "Classroom trained in proper etiquette to interact in a business professional manner at all times for the duration the ride.",

        },
        {
            title : 'Safe',
            description : "On the road training is taught and reinforced with safe driving techniques along with proper Covid-19 protocols.",

        },
    ]

    const Box = ({item}) => {

        return (
            <div>
                <div className="text-copper pb-12">{item?.title}</div>
                <div className="text-grey">{item?.description}</div>
            </div>
        )
    }


    return (
        <>
            <div style={_style.bg} className="">
                <div className="w-full h-full bg-black/80 py-20">
                <div className="container mx-auto ">
                    <div className="text-3xl text-white pb-20">
                        Our drivers
                    </div>
                    <div className="grid grid-cols-1  lg:grid-cols-3 gap-16">
                        {_driverQuality.map(item => <Box  key={item.title} item={item}/>)}
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
