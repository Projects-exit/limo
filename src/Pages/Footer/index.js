import React from 'react'
import { ButtonFilled } from 'Components/Button'
import { Link } from 'react-router-dom'

import {ReactComponent as Logo} from 'Assets/Misc/Logo.svg'
import {ReactComponent as ExitLogo} from 'Assets/Misc/exitLogo.svg'

export default function Footer(props) {
    
    const _about = [
        {
            link : '/#drivers',
            label : "Our drivers"
        },
        {
            link : '/fleet',
            label : "Our fleet"
        },
    ]
    const _contacts = [
        {
            label : "starworldlimo@gmail.com"
        },
        {
            label : "818-929-5353"
        },
    ]


    return (
        <>
            <div className="footer bg-black pt-24 bg-footer  px-12">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <Logo className='mx-auto lg:ml-0' />
                    </div>
                    <div className="w-full lg:w-1/2 pt-16 lg:pt-0">
                        <div className="grid grid-cols-1 lg:grid-cols-3 text-center lg:text-left">
                            <div>
                                <div className="text-white font-bold pb-5">Who we are</div>
                                {
                                    _about.map(item =>
                                        <div key={item.label} className="text-copper pb-5">
                                        <Link to={item.link}> {item.label} </Link>
                                        </div> 
                                    )
                                }
                               
                                <div className="text-copper pb-5"> </div>
                            </div>
                            <div>
                                <div className="text-white font-bold pb-5">Contacts</div>
                                {
                                    _contacts.map(item =>
                                        <div key={item.label} className="text-copper pb-5">
                                            {item.label}
                                        </div> 
                                    )
                                }
                            </div>
                        <div className='pt-8 lg:pt-0'>
                            <Link to="/reservation">
                            <ButtonFilled label="RESERVE NOW" className="ml-auto mr-auto lg:mr-0 w-fit text-sm" />
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between items-center py-16">
                    <div className='flex flex-wrap w-full lg:w-fit text-center lg:text-left'>
                        <div className="text-white text-xs w-full lg:w-fit">
                            © 2020 Star World Limo. All Rights Reserved.
                        </div>
                        <div className='text-xs text-copper px-3 w-full lg:w-fit pt-3 lg:pt-0'>
                            <Link to="/privacy">
                            Privacy policy
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center w-full lg:w-fit justify-center pt-8 lg:pt-0'>
                        <div className="text-copper text-xs px-3">Powered by</div>
                        <div ><ExitLogo /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
