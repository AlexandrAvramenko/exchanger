import { useSelector } from 'react-redux'
import Select, { ActionMeta, OnChangeValue } from 'react-select'
import { currencyState, currencyOption } from '../../types/currencyTypes'

interface CustomSelectProps {
    defaultOption: currencyOption
    selectValue: currencyOption
    handleChangeSelect: (newValue: OnChangeValue<currencyOption, false>, actionMeta: ActionMeta<currencyOption>) => void
}

const CustomSelect: React.FC<CustomSelectProps> = ({ defaultOption, selectValue, handleChangeSelect }) => {
    const { currency } = useSelector((state: currencyState) => state)
    const options = Object.entries(currency.rates).map(entry => ({ value: String(entry[1]), label: entry[0] }))
    console.log('selectValue', selectValue)

    return (
        <Select
            options={options}
            defaultValue={defaultOption}
            value={selectValue}
            onChange={handleChangeSelect}
            className="select"
        />
    )
}

export default CustomSelect