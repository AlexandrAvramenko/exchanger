export interface ICurrency {
    base: string,
    rates: {
        [key: string]: number
    }
}

export interface IConvert {
    query: {
        amount: number | null,
        from: string,
        to: string
    },
    result: number | null,
}

export interface currencyState {
    currency: ICurrency
    convert: IConvert
}

export interface currencyOption {
    value: string,
    label: string
}

export enum currencyActionTypes {
    GET_CURRENCIES = 'GET_CURRENCIES',
    CHANGING_BASE_CURRENCY = 'CHANGING_BASE_CURRENCY',
    CONVERT_CURRENCY = 'CONVERT_CURRENCY'
}

interface getCurrencies {
    type: currencyActionTypes.GET_CURRENCIES
    payload: ICurrency
}

interface changingBaseCurrency {
    type: currencyActionTypes.CHANGING_BASE_CURRENCY
    payload: ICurrency
}

interface convertCurrency {
    type: currencyActionTypes.CONVERT_CURRENCY
    payload: IConvert
}

export type currencyAction = getCurrencies | changingBaseCurrency | convertCurrency