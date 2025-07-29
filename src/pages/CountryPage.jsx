import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

import Card from '../components/Card';
import Badge from '../components/Badge';
import HeaderWithImage from '../components/HeaderWithImage';
import CountryBorders from '../components/CountryBorders';
import CountryCard from '../components/CountryCard';
import SpeakLanguage from '../components/SpeakLanguage';

function CountryPage() {
    const params = useParams();

    const countryName = params.name; // spain
    const [countryInfo, setCountryInfo] = useState({});

    useEffect(() => {
        const fetchCountry = async () => {
            // Faz uma chamada à API REST Countries usando o nome do país

            const data = await fetch(
                `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
            );

            // Converte a resposta da API de JSON para um objeto JavaScript
            const newCountry = await data.json();

            console.log('newCountry', newCountry);
            console.log('newCountry[0]', newCountry[0]);

            setCountryInfo(newCountry[0]);

            const country = [{ name: 'spain', population: 3000 }];
            // const country = { name: 'spain' };

            console.log('teste', country[0]);

            // Descomente a linha abaixo para simular um atraso (por exemplo, para fins de teste)
            // await wait(3000);

            // Atualiza o estado com o primeiro objeto do país retornado pela resposta
            setCountryInfo(newCountry[0]);
        };

        fetchCountry();
    }, [countryName]);

    console.log('countryName', countryName);
    const hasData = Object.keys(countryInfo).length;
    // const temArroz = Object.keys(countryInfo).length;
    console.log('hasInformationInsideMyDraw', hasData);
    console.log('countryInfo', Object.values(countryInfo?.languages ?? {}));

    return (
        <div>
            {!hasData && <h1>Loading...</h1>}
            {hasData > 0 && (
                <div>
                    {/* <HeaderWithImage
                        name={countryInfo.name.common}
                        official={countryInfo.name.official}
                        region={countryInfo.region}
                        subregion={countryInfo.subregion}
                        continents={countryInfo.continents}
                        flags={countryInfo.flags}
                    /> */}

                    <Card>
                        <img src={countryInfo.flags.png}></img>
                        <h1>nome do pais : {countryInfo.name.common}</h1>
                        <h1>população : {countryInfo.population}</h1>
                        <h1>população : {countryInfo.capital}</h1>
                        <Link to={`/region/${countryInfo.region}`}>
                            <h1>ir para {countryInfo.region}</h1>
                        </Link>
                    </Card>

                    {/* <CountryBorders borderCodes={countryInfo.borders} /> */}

                    {Object.values(countryInfo?.languages).map((lang) => (
                        <SpeakLanguage lang={lang} />
                    ))}

                    {/* {languages?.map((lang) => {
                        <SpeakLanguage lang={lang} />;
                    })} */}
                </div>
            )}
        </div>
    );
}

export default CountryPage;

// function testeCozinhar(){

//     // cozinhar arroz

//     const   cebolas =  await pedidoDispensa('cebolas').//10s

//     if(!cebolas) return 'não fazes o jantar'

//     const arroz = await pedidoDispensa('arroz')

// }
