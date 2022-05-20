import React, {createContext, useReducer} from 'react';
import { _carsList } from 'Pages/_carsList';

const stateModal = {
    order : {
        from : '',
        to : '',
        date : '',
        time : '',
        car : _carsList[0],
        name : '',
        email : '',
        phone : '',
        info : ''
    },
    
  }
  
  const initialState = {...stateModal};

  const Store = createContext(initialState);

  const { Provider } = Store;


const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
      let newState = {}
      switch(action.type) {
        case 'initOrder':
          newState = {...state, order : { ...state?.order, ...action?.payload} }
          return newState;
        case 'clearState' :
          return {  ...stateModal  }
        default:
          throw new Error();
      };
    }, initialState);
  
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
  };
  

  export { Store , StateProvider }