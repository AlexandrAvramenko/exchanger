import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { currencyState, currencyOption } from '../types/currencyTypes'
import { CurrencyItem, CurrencyList, CurrencySelect, SelectGroup } from '../styles/components'
import CustomSelect from '../components/ui/CustomSelect';
import { ActionMeta, OnChangeValue } from 'react-select'

const ExchangeRates = () => {
    const { base, rates } = useSelector((state: currencyState) => state.currency)
    const { getCurrencies, changingBaseCurrency } = useActions()
    const defaultOption = {value: '', label: base}
    const [selectValue, setSelectValue] = useState<currencyOption>(defaultOption)
    const currencies = Object.entries(rates)

    useEffect(() => {
        getCurrencies()
    },[]);

    const handleChangeSelect = (newValue: OnChangeValue<currencyOption, false>,
        actionMeta: ActionMeta<currencyOption>) => {
                newValue !== null && (setSelectValue(newValue))
                changingBaseCurrency(newValue?.label)
        }

    return (
        <>
            <CurrencySelect>
                <SelectGroup>
                    <label>Base currency:</label>
                    <CustomSelect
                        defaultOption={defaultOption}
                        selectValue={selectValue}
                        handleChangeSelect={handleChangeSelect}
                    />
                </SelectGroup>
            </CurrencySelect>

            <CurrencyList>
                {currencies.map(([key, value]) => (
                    <CurrencyItem key={key}>
                        <span className='key'>{key}</span>
                        <span className='value'>{value}</span>
                    </CurrencyItem>
                    )
                )}
            </CurrencyList>
        </>
    )
}

export default ExchangeRates;