import { Navigate, Route, Routes } from "react-router-dom";
import CurrencyConverter from "../pages/CurrencyConverter";
import ExchangeRates from "../pages/ExchangeRates";

const Routing = () => {

    return (
        <Routes>
            <Route path="/" element={<ExchangeRates/>}></Route>
            <Route path="/converter" element={<CurrencyConverter/>}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
    )
}

export default Routing;