import React, { useState, useContext } from 'react'
import axios from 'axios'

import { Store } from 'Store/orderStore'

export default function InitCars(props) {

    const _store = useContext(Store)
    // const [_carsList, setCarList] = useState()

    const initCars = async() => {
        try {

            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/reservation/getStrapiStripeProducts`)
            // console.log(res?.data?.data)
            const list = res?.data?.data || []
            // setCarList(list)
            // console.log(list)

            _store.dispatch({
                type: 'initCarList',
                payload: [...list]
            })
    



        } catch(ex) {

        }
    }
    

    return {initCars}
}
