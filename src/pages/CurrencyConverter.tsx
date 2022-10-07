import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, FormContainer, Converter, InputGroup } from "../styles/components";
import { currencyState, currencyOption } from "../types/currencyTypes";
import CustomSelect from "../components/ui/CustomSelect";
import { useActions } from "../hooks/useActions";

const CurrencyConverter = () => {
    const { getCurrencies, convertCurrency } = useActions()
    const { query: { from, to, amount }, result } = useSelector((state: currencyState) => state.convert)
    const defaultOptionFrom = {value: '', label: from}
    const defaultOptionTo = {value: '', label: to}
    const [inputValue, setInputValue] = useState(`${amount}`)
    const [selectValueFrom, setSelectValueFrom] = useState<currencyOption>(defaultOptionFrom)
    const [selectValueTo, setSelectValueTo] = useState<currencyOption>(defaultOptionTo)

    useEffect(() => {
        getCurrencies()
    },[]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        convertCurrency(from, to, +inputValue)
    }

    return (
        <>
            <FormContainer>
                <Converter onSubmit={handleSubmit}>
                    <InputGroup>
                        <label>Convert</label>
                        <input
                            type="number"
                            value={inputValue}
                            className="input-number from"
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(event) => {if (!/[0-9]/.test(event.key)){event.preventDefault();}}}
                            placeholder="Enter amount..."
                            required
                        />
                        <CustomSelect
                            defaultOption={defaultOptionFrom}
                            selectValue={selectValueFrom}
                            handleChangeSelect={(newValue) => newValue !== null && setSelectValueFrom(newValue)}
                        />
                    </InputGroup>
                    <InputGroup>
                        <label>in</label>
                        <CustomSelect
                            defaultOption={defaultOptionTo}
                            selectValue={selectValueTo}
                            handleChangeSelect={(newValue) => newValue !== null && (setSelectValueTo(newValue))}
                        />
                    </InputGroup>
                    <Button type="submit">Calculate</Button>
                </Converter>
                {result !== null && <div>Result: {+inputValue} ({from}) = <b>107.346001</b> ({to})</div>}
            </FormContainer>
        </>
    )
}

export default CurrencyConverter;