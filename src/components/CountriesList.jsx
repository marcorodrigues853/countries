import { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import { Link } from 'react-router';

function CountriesList() {
    const [currentCurrency, setCurrentCurrency] = useState('eur');
    const [countries, setCountries] = useState([]);

    const [currenciesList, setCurrenciesList] = useState([]);

    // fazer useffect emq ue a dependencia é  currentCurrency

    useEffect(() => {
        const fetchCountries = async () => {
            const data = await fetch(
                `https://restcountries.com/v3.1/currency/${currentCurrency}`
            );

            const newCountriesList = await data.json();

            setCountries(newCountriesList);
        };

        fetchCountries();
    }, [currentCurrency]);

    useEffect(() => {
        const fetchCurrencies = async () => {
            const data = await fetch(
                `https://restcountries.com/v3.1/all?fields=currencies`
            );
            const newCurrenciesList = await data.json();
            setCurrenciesList(newCurrenciesList);
        };

        fetchCurrencies();
    }, []);

    console.log('currenciesList', currenciesList);

    return (
        <div>
            <h1>Countries List</h1>

            <select
                onChange={(event) => {
                    setCurrentCurrency(event.target.value);
                }}>
                {currenciesList.map((currency, index) => {
                    const currencies = Object.keys(currency.currencies);
                    console.log('currencies[0]', index + '-' + currencies[0]);
                    return (
                        <option
                            value={currencies[0]}
                            key={index + currencies[0]}>
                            {/* currency.currencies. acede ao objecto */}
                            {/*[currencies?.[0]].  escreve dinamicante o valor  da key a aceder  */}

                            {currency.currencies?.[currencies?.[0]]?.name}
                        </option>
                    );
                })}

                {/* <option value={'usd'}>USD</option>
                <option value={'cop'}>COP</option>
                <option value={'gbp'}>GBP</option> */}
            </select>

            <div>4 botoes com as moedas que quiserem</div>

            <div className="grid grid-4">
                {countries.map((country) => {
                    return (
                        <Link
                            to={`/country/${country.name.common}`}
                            key={country.cca3}>
                            <CountryCard
                                flag={country.flags.png}
                                name={country.name.common}
                                capital={country.capital}
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default CountriesList;
