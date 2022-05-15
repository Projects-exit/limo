import React from 'react';
import ellipseBg from 'Assets/Bg/Ellipse.png';

export const CardGrey = (props) => {
    return (
        <div
            style={{
                backgroundImage: `url(${ellipseBg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            className={`rounded-xl my-12 bg-[#0d0d0d] p-8 ${props.className}`}>
            {props.children}
        </div>
    );
};
