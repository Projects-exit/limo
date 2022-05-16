import React, { useState, useEffect } from 'react';
import { InputText } from 'Components/InputText';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Outsideclick from 'Hooks/OutsideClick';

export const PickUpData = (props) => {

    const { inputs, handleChange, className } = props;
 


    return (<>
        <div className="flex  flex-wrap w-full ">
            <InputText
                className={`${className ? className : 'w-full lg:w-1/3 my-2 lg:my-0  px-3'} `}
                value={inputs?.from}
                placeholder="Pick up"
                handleChange={(e) => handleChange({ "from": e.target.value })} />
            <InputText
                className={`${className ? className : 'w-full lg:w-1/3 my-2 lg:my-0  px-3'} `}
                value={inputs?.to}
                placeholder="Destination"
                handleChange={(e) => handleChange({ "to": e.target.value })} />
            <div  className={`${className ? className : 'w-full lg:w-1/3 my-2 lg:my-0  px-3'} `}>
                <DateTimeInput className="" />

            </div>

            {/* <InputText
                className={`${className ? className : 'w-full lg:w-1/3 my-2 lg:my-0  px-3'} `}
                value={inputs?.time}
                handleChange={(e) => handleChange({ "time": e.target.value })} /> */}
            {/* <ButtonFilled label="Reserve now" className="mr-0 ml-auto grow text-center" /> */}
        </div>

    </>
    );
};


const DateTimeInput = (props) => {

    const {
        handleDateChange = () => {},
        handleTimeChange = () => {}
    } = props

    const [selectedDay, setSelectedDay] = useState();
    const [selectedTime, setTime] = useState();
    const [open, setOpen] = useState(false)
    const [openTime, setOpenTime] = useState(false)

    // console.log(selectedDay)

    const GenerateTime = () => {

        const _hours_1 = [12,1,2,3,4,5,6,7,8,9,10,11]
        const _hours_2 = [12,1,2,3,4,5,6,7,8,9,10,11]

        return(<div  className=''>
            {_hours_1.map(item => <div 
                onClick={() => setTime(`${item}:00 AM`)}
                className='py-2 hover:bg-amber-700/30 cursor-pointer'> {item}:00 AM </div>)}
            
            {_hours_2.map(item => <div 
                onClick={() => setTime(`${item}:00 PM`)}
                className='py-2 hover:bg-amber-700/30 cursor-pointer'> {item}:00 PM </div>)}
        </div>)
    }

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


    useEffect(() => {
        handleDateChange(selectedDay)
        handleTimeChange(selectedTime)
        setOpen(false)
        setOpenTime(false)
    }, [selectedDay, selectedTime])

    return (
        <div className="flex w-full h-full min-h-[40px]">
            <div 
                onClick={() => setOpen(true)}
                className="relative w-1/2 border-copper border w-full bg-transparent rounded-3xl rounded-r-none text-white flex items-center justify-center">
                    <div className="div">
                        {selectedDay ? format(new Date(selectedDay), 'MM/dd/yyyy') : "Pick a date"}
                    </div>
                    <style>{css}</style>
                
                {open && <div  className='absolute top-16 left-0 bg-grey w-fit z-30 rounded-3xl border-copper border'>
                    <Outsideclick
                        onOutsideClick={() => setOpen(false)}
                        >
                        <DayPicker
                            mode="single"
                            selected={selectedDay}
                            onSelect={setSelectedDay}
                            modifiersClassNames={{
                                selected: 'my-selected',
                                today: 'my-today'
                              }}
                            />
                    </Outsideclick>
                </div>
                }
            </div>
            <div 
                onClick={() => setOpenTime(true)}
                className="w-1/2 relative border-copper border w-full bg-transparent rounded-3xl rounded-l-none text-white flex items-center justify-center ">
                    <div className=""> 
                        {selectedTime ? selectedTime : "Pick a time"}
                     </div>
                {openTime && <div  className='absolute top-16 bg-grey w-full h-32  z-30 rounded-3xl border-copper border  overflow-hidden'>
                    <Outsideclick onOutsideClick={() => setOpenTime(false)}>
                        <div className="h-32 overflow-y-scroll special-scrollbar text-center">
                            <GenerateTime />
                        </div>
                    </Outsideclick>
                </div>
                }
            </div>
        </div>
    )
}