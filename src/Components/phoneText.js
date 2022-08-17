import React from 'react';
// import PhoneInput, { format, normalize } from "react-phone-input-auto-format";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export const PhoneText = (props) => {

    const {  value, handleChange = () => { }, className, inputClassName, placeholder, type="text" } = props;

    // const onChange = e => {
    //     // console.log(value.length)
        
    //     if(e.target.value.length <= 14){
    //         handleChange(format(e.target.value))
    //     } else {
    //         handleChange(value)
    //     }
      
        
    // }

    return (
        <div className={className}>
            {/* <input
                type={type}
                className={`${inputClassName}  border-copper border w-full bg-transparent rounded-3xl text-white px-5 py-2 placeholder-grey`}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                /> */}
                <PhoneInput
                country={'us'}
                preferredCountries={["us"]}
                // disableCountryCode={true}
                value={value}
                onChange={e => handleChange(e)}
                placeholder={placeholder}
                inputClass={"h-12 bg-red-300 text-black w-full"}
                searchClass={""}
                inputStyle={{ width: '100%', backgroundColor: 'transparent', border: 'none', height: '48px', color: 'white' }}
                // buttonStyle={{backgroundColor : 'transparent', border : 'none', }}
                containerClass={"bg-transparent   w-full   border-copper border rounded-3xl h-12 absolute z-30"}
                // containerClass={className}
                dropdownStyle={{ zIndex: 50, color: 'black', backdropFilter: 'blur(90%)' }}
                buttonClass={"blured-btn"}
                dropdownClass={"blured-bg"}
            />
        </div>
    );
};
