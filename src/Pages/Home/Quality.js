import React from 'react'

export default function Quality(props) {


    return (
        <>
            <div className="w-full bg-black   ">

                hello
                <div className="container mx-auto h-96">
                    <div className="relative">
                        <div className="absolute w-full  bg-grey">
                            <div className="flex">
                                <div className="w-1/2"></div>
                                <div className="w-1/2">
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
                </div>
            </div>
        </>
    )
}

const QualityDetails = (props) => {

    const _qualityList = [
        {
            title : "Private events",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
            title : "Occasions",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
            title : "Airport shuttle",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
        {
            title : "Chauffeur services",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
    ]

    const Header = ({item}) => (<div className='px-3 text-grey-l'>
        {item?.title}
    </div>)

    return (
        <div>
            <div className="flex">
                {_qualityList.map(item => <Header key={item.title} item={item} />)}
            </div>

        </div>
    )
}