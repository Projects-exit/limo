import React, { useState, useEffect } from 'react';
import { InputText } from 'Components/InputText';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Outsideclick from 'Hooks/OutsideClick';

import AutoCompleteInput from 'Components/AutoCompleteInput'

export const PickUpData = (props) => {

    const {
        inputs,
        handleChange = () => { },
        className
    } = props;

    const [value, setValue] = useState(null);

    return (
        <>
        <form autocomplete="off" className="flex  flex-wrap w-full text-sm ">


            {/* <div className="flex  flex-wrap w-full text-sm "> */}

                <AutoCompleteInput
                    className={`${className ? className : 'w-full lg:w-1/3 my-2 lg:my-0  px-3'} `}
                    placeholder="Pick-up"
                    value={inputs?.from}
                    handleChange={(e) => handleChange({ "from": e })}
                />


                <AutoCompleteInput
                    className={`${className ? className : 'w-full lg:w-1/3 my-2 lg:my-0  px-3'} `}
                    value={inputs?.to}
                    placeholder="Destination"
                    handleChange={(e) => handleChange({ "to": e })} />

                <div className={`${className ? className : 'w-full lg:w-1/3 my-2 lg:my-0  px-3'} `}>
                    <DateTimeInput
                        inputDate={inputs?.date}
                        inputTime={inputs?.time}
                        handleDateChange={(date) => handleChange({ "date": date })}
                        handleTimeChange={(time) => handleChange({ "time": time })}
                        className="" />

                </div>

                {/* <InputText
                className={`${className ? className : 'w-full lg:w-1/3 my-2 lg:my-0  px-3'} `}
                value={inputs?.time}
                handleChange={(e) => handleChange({ "time": e.target.value })} /> */}
                {/* <ButtonFilled label="Reserve now" className="mr-0 ml-auto grow text-center" /> */}
            {/* </div> */}


        </form>
    </>
    );
};


const DateTimeInput = (props) => {

    const {
        handleDateChange = () => { },
        handleTimeChange = () => { },
        inputDate,
        inputTime,
    } = props

    const [selectedDay, setSelectedDay] = useState();
    const [selectedTime, setTime] = useState();
    const [open, setOpen] = useState(false)
    const [openTime, setOpenTime] = useState(false)

    // console.log(selectedDay)



    const css = `
        .my-selected:not([disabled]) { 
            font-weight: bold; 
            border: 1px solid #B9884F;
            color : #B9884F;
        }
        .my-selected:hover:not([disabled]) { 
            border-color: blue;
            color: blue;
        }
        .my-today { 
            font-weight: bold;
            color: #B9884F;
        }
        `;

    const handleDateChangeFun = (selectedDay) => {
        setSelectedDay(selectedDay)
        handleDateChange(selectedDay)
        setOpen(false)


    }
    const handleTimeChangeFun = (selectedTime) => {
        setTime(selectedTime)
        handleTimeChange(selectedTime)
        setOpenTime(false)

    }


    useEffect(() => {
        setSelectedDay(selectedDay)
        setTime(inputTime)
    }, [inputDate, inputTime])


    const GenerateTime = () => {

        const _hours_1 = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        const _hours_2 = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

        return (<div className=''>
            {_hours_1.map(item => <div
                onClick={() => {
                    handleTimeChangeFun(`${item}:00 AM`)
                }}
                className='py-2 hover:bg-amber-700/30 cursor-pointer'> {item}:00 AM </div>)}

            {_hours_2.map(item => <div
                onClick={() => {
                    handleTimeChangeFun(`${item}:00 PM`)
                }}
                className='py-2 hover:bg-amber-700/30 cursor-pointer'> {item}:00 PM </div>)}
        </div>)
    }

    return (
        <div className="flex w-full h-full min-h-[40px]">
            <div

                className="relative w-1/2 border-copper border w-full bg-transparent rounded-3xl rounded-r-none text-white flex items-center justify-center">
                <div
                    onClick={() => setOpen(true)}
                    className="w-full text-center h-full flex justify-center items-center cursor-pointer">
                    {inputDate ? format(new Date(inputDate), 'MM/dd/yyyy') : "Pick a date"}
                </div>
                <style>{css}</style>

                {open && <div className='fixed sm:absolute top-[100px]  sm:top-16 left-[0px] sm:left-0 bg-grey w-fit z-20 rounded-3xl border-copper border'>
                    <Outsideclick
                        onOutsideClick={() => setOpen(false)}
                    >
                        <DayPicker
                            mode="single"
                            selected={inputDate}
                            onSelect={handleDateChangeFun}
                            modifiersClassNames={{
                                selected: 'my-selected',
                                today: 'my-today'
                            }}
                        />
                    </Outsideclick>
                </div>
                }
            </div>
            <div className="w-1/2 relative border-copper border w-full bg-transparent cursor-pointer rounded-3xl rounded-l-none text-white flex items-center justify-center ">
                <div
                    onClick={() => setOpenTime(true)}
                    className="w-full text-center h-full flex justify-center items-center">
                    {inputTime ? inputTime : "Pick a time"}
                </div>
                {openTime && <div className='absolute top-16 bg-grey w-full h-32  z-30 rounded-3xl border-copper border font-sans  overflow-hidden '>
                    <Outsideclick onOutsideClick={() => setOpenTime(false)}>
                        <div className="h-32 overflow-y-scroll special-scrollbar text-center font-bold ">
                            <GenerateTime />
                        </div>
                    </Outsideclick>
                </div>
                }
            </div>
        </div>
    )
}