import { useEffect, useState } from 'react';
import Card from './Card';

function CountryThatTalks({ language }) {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetchCountriesThatTalks = async () => {
            const data = await fetch(
                `https://restcountries.com/v3.1/lang/${language}`
            );

            const countriesThatTalk = await data.json();

            setCountries(countriesThatTalk);
        };

        fetchCountriesThatTalks();
    });
    return (
        <div className="grid grid-4">
            {countries.map((country) => (
                <Card>
                    <div style={{ display: 'flex', gap: 16 }}>
                        <h3>{country.name.common}</h3>
                        <img src={country.flags.png} width={100} />
                    </div>
                </Card>
            ))}
        </div>
    );
}

export default CountryThatTalks;
