import { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import Button from './Button';

function CountriesList() {
    const [currentCurrency, setCurrentCurrency] = useState('eur');
    const [countries, setCountries] = useState([]);

    const [currenciesList, setCurrenciesList] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    // fazer useffect emq ue a dependencia é  currentCurrency

    useEffect(() => {
        setIsLoading(true);
        const fetchCountries = async () => {
            const data = await fetch(
                `https://restcountries.com/v3.1/currency/${currentCurrency}`
            );
            const newCountriesList = await data.json();
            console.log('newCountriesList', newCountriesList);
            setCountries(newCountriesList);
        };

        fetchCountries();
    }, [currentCurrency]);

    useEffect(() => {
        console.log('olha eu');
        const fetchCurrencies = async () => {
            const data = await fetch(
                `https://restcountries.com/v3.1/all?fields=currencies`
            );
            const newCurrenciesList = await data.json();
            console.log('newCurrenciesList', newCurrenciesList);
            setCurrenciesList(newCurrenciesList);
        };

        fetchCurrencies();
    }, []);

    console.log('currenciesList', currenciesList);

    return (
        <div>
            <h1>Countries List</h1>

            {/* 
{
    "currencies": {
        "DOP": {
            "name": "Dominican peso",
            "symbol": "$"
        }
    }
}
*/}
            <select
                onChange={(event) => {
                    setCurrentCurrency(event.target.value);
                }}>
                {currenciesList.map((currency) => {
                    const currencies = Object.keys(currency.currencies);
                    return (
                        <option value={currencies[0]}>
                            {/* currency.currencies. acede ao objecto */}
                            {/*[currencies?.[0]].  escreve dinamicante o valor  da key a aceder  */}

                            {currency.currencies?.[currencies?.[0]]?.name}
                        </option>
                    );
                })}

                <option value={'usd'}>USD</option>
                <option value={'cop'}>COP</option>
                <option value={'gbp'}>GBP</option>
            </select>

            <div>4 botoes com as moedas que quiserem</div>

            <div className="grid grid-4">
                {isLoading && <h1>LOADING ....</h1>}

                {!isLoading &&
                    countries.map((country) => {
                        return (
                            <CountryCard
                                key={country.cca3}
                                flag={country.flags.png}
                                name={country.name.common}
                                capital={country.capital}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

export default CountriesList;
