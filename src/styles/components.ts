import styled from 'styled-components'

export const NavbarContainer = styled.div`
    border-bottom: 1px solid #dee2e6;
    background-color: #f8f9fa;
    margin-bottom: 20px;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
`

export const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    a {
        text-decoration: none;
        color: black;
    }

    @media (min-width: 576px) {
        flex-direction: row;
        justify-content: space-between;
    }

`

export const CurrencySelect = styled.div`
    display: flex;
    justify-content: center;
`

export const SelectGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eff1f5;
    border-radius: 6px;
    padding: 16px 20px;
    margin-bottom: 10px;

    label {
        margin-right: 20px;
    }
`


export const CurrencyList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

export const CurrencyItem = styled.div`
    width: 220px;
    border: 1px solid grey;
    padding: 4px 6px;
    margin: 8px;

    .key,
    .value {
        margin: 10px;
    }

    .key {
        width: 50px;
    }

    .value {
        font-weight: 500;
    }
`

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Converter = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    background-color: #eff1f5;
    border-radius: 6px;
    max-width: 320px;
    padding: 20px;
    margin-bottom: 20px;

    @media (min-width: 576px) {
        max-width: 400px;
    }

    @media (min-width: 768px) {
        flex-wrap: nowrap;
        max-width: none;
        justify-content: center;
    }
`

export const InputGroup = styled.div`
    display: flex;
    align-items: center;
    background-color: #eff1f5;
    border-radius: 4px;
    padding-bottom: 10px;

    @media (min-width: 768px) {
        padding-right: 20px;
        padding-bottom: 0;

    }

    .input-number {
        font-size: 16px;
        min-height: 38px;
        border: 1px solid #cccccc;
        border-right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        width: 100%;
        padding: 2px 8px;

        &.from:focus {
            border: 2px solid #2684ff;
            border-right: 1px solid #2684ff;;
        }
    }

    .select {
        min-width: 94px;
    }

    &:first-child {
        .select {
            div {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
        }
    }

    label {
        margin-right: 20px;
    }
`

export const Button = styled.button`
    color: #fff;
    background-color: #0d6efd;
    text-align: center;
    border: 1px solid #0d6efd;
    border-radius: 6px;
    cursor: pointer;
    padding: 6px 12px;

`