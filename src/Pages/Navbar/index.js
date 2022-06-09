import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import usescrollpos from 'Hooks/useScrollPos'

import {ReactComponent as Logo} from 'Assets/Misc/Logo.svg'
import {ReactComponent as Menu} from 'Assets/Misc/Menu.svg'
import { ButtonFilled } from 'Components/Button'
import MobileMenu from './MobileMenu'

export default function Index(props) {
    
    const { isScrollBeyond, isScrollUp } = usescrollpos()

    const _floatNav = isScrollBeyond(100)
    const [open, setOpen] = useState()

    return (
        <>
        <div className={`${_floatNav ? 'bg-black' : ''} fixed top-0 z-40 w-full`}>
            <div className="flex justify-between items-center px-6 py-2 items-center">
                <div className='w-fit'>
                    <Link to="/">
                        <Logo width={140} />
                    </Link>
                </div>
                <div className='hidden lg:flex'>
                    <div className="flex items-center text-sm">
                        <div className="text-copper mx-5">
                            <Link to="/fleet">
                                Our fleet
                            </Link>
                        </div>
                        <div className="text-copper mx-5">
                            818-929-5353
                        </div>
                        <Link to="/payment/code">
                        <ButtonFilled label="PAYMENT" className="text-xs" />
                        </Link>
                    </div>
                </div>
                <div className="block lg:hidden cursor-pointer" onClick={() => setOpen(true)}>
                    <Menu height={50} width={40} />
                </div>
            </div>
        </div>
        <MobileMenu open={open} setOpen={setOpen}  />
        </>
    )
}
