import { useEffect, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router';

function SpeakLanguage({ lang = 'english' }) {
    const [countriesList, setCountriesList] = useState([]);

    useEffect(() => {
        const fetchCountriesByLanguage = async () => {
            // 0 paises
            const data = await fetch(
                `https://restcountries.com/v3.1/lang/${lang}`
            );

            const newCountriesList = await data.json();
            setCountriesList(newCountriesList);
        };

        fetchCountriesByLanguage();
    }, [lang]);

    console.log('countriesList', countriesList);
    return (
        <div>
            <h1>Paises que falam {lang}</h1>2
            {countriesList.map((country) => {
                return (
                    <Link to={`/country/${country.name.common}`}>
                        <Card>
                            <h3>{country.name.common}</h3>
                        </Card>
                    </Link>
                );
            })}
        </div>
    );
}

export default SpeakLanguage;
