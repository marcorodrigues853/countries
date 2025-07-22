import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import CountryCard from '../components/CountryCard';

function RegionDetailPage() {
    const params = useParams();
    const name = params.name;

    const [countries, setCountries] = useState([]);

    console.log('countries', countries);
    // https://restcountries.com/v3.1/region/europe

    useEffect(() => {
        // Função assíncrona para buscar os dados dos países da API
        const fetchCountries = async () => {
            // Faz uma requisição à API para obter os países da região especificada
            const data = await fetch(
                `https://restcountries.com/v3.1/region/${name}`
            );

            // Converte a resposta da API para formato JSON
            const newCountriesList = await data.json();

            // Atualiza o estado com a lista de países obtida
            setCountries(newCountriesList);
        };

        // Chama a função para buscar os dados
        fetchCountries();
    }, []); // O array vazio indica que o efeito só será executado uma vez, ao montar o componente

    console.log('resultado dos params:', params);
    return (
        <div>
            <h1>bem vindo à region: {name} </h1>;
            <div className="grid grid-4">
                {countries.map((country) => (
                    <Link to={`/country/${country.name.common}`}>
                        <CountryCard
                            name={country.name.common}
                            flag={country.flags.png}
                            capital={country.capital}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default RegionDetailPage;
