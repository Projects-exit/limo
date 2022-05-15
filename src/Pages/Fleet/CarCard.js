import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonFilled } from 'Components/Button';
import { CardGrey } from 'Components/Cards';
import { CarDetail } from './CarDetail';

export const CarCard = (props) => {

    const { item } = props;

    return (
        <CardGrey >
            
            <div className="relative h-24 lg:h-12">
                <div className="absolute top-0 left-0">
                    <div className="text-2xl text-shite font-bold  text-white">
                        {item?.title}
                    </div>
                    <div className="py-2 text-xl font-bold text-copper">
                        {item?.sub}
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <img src={item?.image} />
            </div>
            <div className="flex flex-wrap justify-between items-center pt-16 lg:pt-0">
                <CarDetail seat={item?.seat} luggage={item?.luggage} />
                <div className='w-full lg:w-fit pt-6 lg:pt-0'>
                    <Link to="/reservation">
                        <ButtonFilled label="RESERVE NOW" className="text-center text-sm" />
                    </Link>
                </div>
            </div>
        
        </CardGrey>
    );
};


