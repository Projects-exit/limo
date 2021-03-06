import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Component = (props) => (
  <div className={props.className}>
    <GooglePlacesAutocomplete
        apiKey='AIzaSyD8XcAYYugR3OfE4FPnomAIGEJJJQb8kzI'
        autocompletionRequest={{
            // bounds: [
            //   { lat: 50, lng: 50 },
            //   { lat: 100, lng: 100 }
            // ],
            componentRestrictions: {
            country: ['us'],
            }
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
                borderRadius : '30px',
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
            //   noOptionsMessage: (provided) => ({
            //     ...provided,
            //     display : 'none'
            //   }),
            },
          }}

     />
  </div>
);

export default Component;