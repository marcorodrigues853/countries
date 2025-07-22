import { useEffect, useState } from 'react';

import { Link } from 'react-router';
import CurrencySelector from './CurrencySelector';
import CurrencyCountryCard from './CurrencyCountryCard';

function ContainerCountriesCurrency({ currency = 'eur' }) {
    // defenir o que vou receber de props ✅
    const [paises, setPaises] = useState();
    // ir buscar todos os países de acordo com a moeda que vem das props

    // renderizar os paises
    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
        console.log(`Selected currency: ${currency}`);
    };

    console.log('currency999', currency);
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/currency/${selectedCurrency}`)
            .then((response) => response.json())
            .then((countries) => {
                const newCountries = countries;
                setPaises(newCountries);
            });
    }, [selectedCurrency]);

    return (
        <div>
            <select
                style={{
                    marginBottom: '16px',
                    background: 'transparent',
                    color: 'black',
                }}
                onChange={(event) => setSelectedCurrency(event.target.value)}>
                <option value="eur">EUR</option>
                <option value="usd">USD</option>
                <option value="brl">BRL</option>
                <option value="cup">PESOS CUBANOS</option>
            </select>
            <div className="grid">
                {/* map */}
                {paises &&
                    paises.map((pais) => (
                        <Link to={`/country/${pais.name.common}`}>
                            <CurrencyCountryCard
                                flag={pais.flags.png}
                                name={pais.name.common}
                            />
                        </Link>
                    ))}
            </div>
            <CurrencySelector onChange={handleCurrencyChange} />
        </div>
    );
}

export default ContainerCountriesCurrency;
