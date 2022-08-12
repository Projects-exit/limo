import React from 'react';
import { format } from 'date-fns';

export const DisplayDetails = ({ inputs }) => {

    const list = ["from", "to", "date", "time", "name", "email", "phone", "info"];

    const _date = (date) => {
        if (date) {
            return format(new Date(date), 'dd/MM/yyyy');
        }
    };


    const Row = ({ item }) => (<div className='flex text-white py-2'>
        <div className='grow font-bold text-copper'> {item} : </div>
        <div className='grow '>{`${inputs?.[item]}`} </div>
    </div>);

    return (
        <>
            <div className="div w-full">
                <div className="font-bold text-white py-3 text-lg">
                    Booking details
                </div>
                <div className='flex flex-wrap sm:flex-nowrap text-white py-2'>
                    <div className='w-full sm:w-24 font-bold  text-copper text-left sm:text-right'> Name :</div>
                    <div className='grow sm:pl-3'> {inputs?.name} </div>
                </div>
                <div className='flex flex-wrap sm:flex-nowrap text-white py-2'>
                    <div className='w-full sm:w-24 font-bold  text-copper text-left sm:text-right'> Pick-up :</div>
                    <div className='grow sm:pl-3'> {inputs?.from?.label} </div>
                </div>
                <div className='flex flex-wrap sm:flex-nowrap text-white py-2'>
                    <div className='w-full sm:w-24 font-bold  text-copper text-left sm:text-right'> Destination :</div>
                    <div className='grow sm:pl-3'> {inputs?.to?.label} </div>
                </div>
                <div className='flex flex-wrap sm:flex-nowrap text-white py-2'>
                    <div className='w-full sm:w-24 font-bold  text-copper text-left sm:text-right'> date :</div>
                    <div className='grow sm:pl-3'> {`${_date(inputs?.date)}`} </div>
                </div>
                <div className='flex flex-wrap sm:flex-nowrap text-white py-2'>
                    <div className='w-full sm:w-24 font-bold  text-copper text-left sm:text-right'> Time :</div>
                    <div className='grow sm:pl-3'> {inputs?.time} </div>
                </div>
                {/* <div className="font-bold text-white py-3">
                User details
            </div> */}
            </div>
        </>
    );

};
