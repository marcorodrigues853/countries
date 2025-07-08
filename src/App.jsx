import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';

function App() {
    const [moeda, setMoeda] = useState('eur');
    const [paises, setPaises] = useState([]);
    const [search, setSearch] = useState('spain');

    console.log('paises', paises);
    console.log('search', search);
    useEffect(() => {
        console.log('dependencias vazias');

        //  recolher dados na API
        const fetchData = async () => {
            const data = await fetch(
                `https://restcountries.com/v3.1/currency/${moeda}`
            );
            const countries = await data.json();

            setPaises(countries);
        };

        fetchData();

        // guardar o que vem da a API
    }, [moeda]);

    const filteredCountries = paises.filter((pais) => {
        return String(pais.name.common)
            .toLowerCase()
            .includes(search.toLowerCase());
    });

    return (
        <>
            <h1>bye bye {moeda}!</h1>
            <Button
                label={'eur'}
                onClick={() => {
                    setMoeda('eur');
                }}
            />

            <Button
                label={'usd'}
                onClick={() => {
                    setMoeda('usd');
                }}
            />
            <Button
                label={'cop'}
                onClick={() => {
                    setMoeda('cop');
                }}
            />

            <input
                type="text"
                onChange={(event) => {
                    const newValue = event.target.value;
                    setSearch(newValue);
                }}
            />
            <div className="grid grid-4">
                {filteredCountries.map((pais) => {
                    return (
                        <Card key={pais.cca3}>
                            <img src={pais.flags?.png} alt="" />
                            <h4>{pais.name.common}</h4>
                            <span>{pais.subregion}</span>
                        </Card>
                    );
                })}
            </div>
        </>
    );
}

export default App;
