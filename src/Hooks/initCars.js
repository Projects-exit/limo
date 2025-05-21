import React, { useState, useContext } from 'react'
import axios from 'axios'

import { Store } from 'Store/orderStore'
import {data} from './data'
export default function InitCars(props) {

    const _store = useContext(Store)
    // const [_carsList, setCarList] = useState()

    const initCars = async() => {
        try {

            // const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/cars?populate=*`)
            // console.log(res?.data?.data)
            // const list = res?.data?.data || []
            const list = data
            const carlist = list.filter(item => item.attributes.is_available === true).map(item => ({
                id:item.id, 
                ...item.attributes,
                // image : `${process.env.REACT_APP_BASE_URL}${item.attributes?.image?.data?.attributes?.url}`
                image : `${item.attributes?.image?.data?.attributes?.url}`
                
            }))
            // setCarList(list)
            // console.log(carlist)

            _store.dispatch({
                type: 'initCarList',
                payload: [...carlist]
            })
    



        } catch(ex) {

        }
    }
    

    return {initCars}
}
