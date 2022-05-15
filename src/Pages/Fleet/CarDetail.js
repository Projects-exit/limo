import React from 'react';
import { ReactComponent as BagIcon } from 'Assets/Misc/bagIcon.svg';
import { ReactComponent as PersonIcon } from 'Assets/Misc/personIcon.svg';



export const CarDetail = (props) => {

    const { seat, luggage, className = 'bg-black' } = props;

    return (
        <div className='flex text-2xl'>
            <div className='mx-4 flex items-center '>
                <div className={`${className}  rounded-full h-9 w-9 flex items-center justify-center`}>
                    <PersonIcon height={15} width={15} />
                </div>
                <div className="text-white  ml-3 font-bold">
                    {seat}
                </div>
            </div>
            <div className='mx-4 flex items-center'>
                <div className={`${className} rounded-full  h-9 w-9 flex items-center justify-center`}>
                    <BagIcon height={23} width={23} />
                </div>
                <div className="text-white  ml-3 font-bold">
                    {luggage}
                </div>
            </div>
        </div>
    );
};
