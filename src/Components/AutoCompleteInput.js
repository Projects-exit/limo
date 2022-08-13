import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Component = (props) => (
  <div className={props.className}>
    <GooglePlacesAutocomplete
        apiKey='AIzaSyD8XcAYYugR3OfE4FPnomAIGEJJJQb8kzI'
        autocompletionRequest={{
            // bounds: [
            //   { lat: 38.512604, lng: -123.160688 },
            //   { lat: 32.761565, lng: -114.277261 }
            //   // { lat: 50, lng: 50 },
            //   // { lat: 100, lng: 100 }
            // ],
            location : {
              lat:  36.757400, lng: -119.777406
            },
            radius: 650000,
            // types: ['address'],
            componentRestrictions: { country: ['us'],}
          }}
          selectProps={{
            value : props?.value,
            onChange: props?.handleChange,
            placeholder: props.placeholder,
            name : "from--",
            noOptionsMessage : ({inputValue}) =>( !inputValue ? "Start typing" : "No results found"),
            styles: {
                control:(provided) => ({
                    ...provided,
                    color: 'white',
                    width : '100%',
                    backgroundColor : 'transparent',
                    borderRadius : '30px',
                    border : '1px solid #B9884F',
                    boxShadow: 'none',
                    cursor : 'pointer',
                    '&:hover' : {
                        border : '1px solid #B9884F'
                    }
                    
    
                  }),
              input: (provided) => ({
                ...provided,
                color: 'white',
                width : '100%',
                backgroundColor : 'transparent',
                // borderRadius : '30px',
                // border : '1px solid red'


              }),
              option: (provided, state) => ({
                ...provided,
                color: 'white',
                borderRadius : '10px',
                cursor : 'pointer',
                // fontWeight : 'bold',
                fontFamily : 'sans-serif',
                backgroundColor: state.isSelected ? '#B9884F' : 'transparent',
                '&:hover' : {
                    backgroundColor : '#B9884F',
                   
                    color: 'white',
                }

                
              }),
              menu: (provided) => ({
                ...provided,
                color: 'white',
                backgroundColor : '#1A1A1A',
                borderRadius : '30px',
                border : '1px solid #B9884F',
                
              }),
              singleValue: (provided) => ({
                ...provided,
                color: 'white',
              }),
              placeholder: (provided) => ({
                ...provided,
                color: 'white',
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                display : 'none'
              }),
              indicatorSeparator: (provided) => ({
                ...provided,
                display : 'none'
              }),
              noOptionsMessage: (provided) => ({
                ...provided,
                // display : 'none',
                color : 'white',
                fontFamily : 'sans-serif',
                fontWeight : 'bold'
              }),
            },
          }}

     />
  </div>
);

export default Component;