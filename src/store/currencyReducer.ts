import { currencyAction, currencyActionTypes, currencyState, ICurrency, IConvert } from "../types/currencyTypes";


const currencyDefaultValue: ICurrency = {
    base: 'JPY',
    rates: {
        "EUR": 0.813399,
        "GBP": 0.72007,
        "JPY": 107.346001
    }
}

const convertDefaultValue: IConvert = {
    query: {
        amount: null,
        from: "EUR",
        to: "GBP"
    },
    result: null
}

const initialState: currencyState = {
    currency: currencyDefaultValue,
    convert: convertDefaultValue
}

const currencyReducer = (state = initialState , action: currencyAction): currencyState => {
    switch (action.type) {
        case currencyActionTypes.GET_CURRENCIES:
            return {
                ...state, currency: action.payload
            }
        case currencyActionTypes.CHANGING_BASE_CURRENCY:
            return {
                ...state, currency: action.payload
            }
        case currencyActionTypes.CONVERT_CURRENCY:
            return {
                ...state, convert: action.payload
            }
        default:
            return state
    }
}

export default currencyReducer;