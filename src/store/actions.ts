import { Dispatch } from "redux"
import axios from 'axios'
import { currencyAction, currencyActionTypes } from "../types/currencyTypes"


export const getCurrencies = () => async (dispatch: Dispatch<currencyAction>) => {
    try {
        const response = await axios.get(`https://api.apilayer.com/exchangerates_data/latest?apikey=fedlrDpnjLGDLS7oQDvclGLQii4YYpl8`)
        dispatch({type: currencyActionTypes.GET_CURRENCIES, payload: response.data})
    } catch (e) {
        console.log(e)
    }
}

export const changingBaseCurrency = (newBase: string | undefined) => async (dispatch: Dispatch<currencyAction>) => {
    try {
        const response = await axios.get(`https://api.apilayer.com/exchangerates_data/latest?apikey=fedlrDpnjLGDLS7oQDvclGLQii4YYpl8&base=${newBase}`)
        dispatch({type: currencyActionTypes.CHANGING_BASE_CURRENCY, payload: response.data})
    } catch (e) {
        console.log(e)
    }
}

export const convertCurrency = (from: string, to: string, amount: number) => async (dispatch: Dispatch<currencyAction>) => {
    try {
        const response = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?apikey=fedlrDpnjLGDLS7oQDvclGLQii4YYpl8&to=${to}&from=${from}&amount=${amount}`)
        dispatch({type: currencyActionTypes.CONVERT_CURRENCY, payload: response.data})
    } catch (e) {
        console.log(e)
    }
}
