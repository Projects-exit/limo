import React from 'react';

export const DisplayPrice = ({ price }) => {

    return (
        <div className="text-white py-2 text-right">
            <div className="text-sm text-copper">
                Price
            </div>
            <div className='text-6xl  font-bold'>
                $ {price}
            </div>
        </div>
    );
};
