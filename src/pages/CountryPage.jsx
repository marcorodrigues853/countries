import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function CountryPage() {
    const params = useParams();
    const countryName = params.name;

    const [countryInfo, setCountryInfo] = useState({});

    console.log('countryInfo', countryInfo);

    useEffect(() => {
        const fetchCountry = async () => {
            function wait(ms) {
                return new Promise((resolve) => setTimeout(resolve, ms));
            }
            const data = await fetch(
                `https://restcountries.com/v3.1/name/spain?fullText=true`
            );
            const newCountry = await data.json();
            await wait(3000);

            setCountryInfo(newCountry[0]);
        };

        fetchCountry();
    }, []);

    console.log('countryName', countryName);
    const hasData = Object.keys(countryInfo).length;
    // const temArroz = Object.keys(countryInfo).length;
    console.log('hasInformationInsideMyDraw', hasData);

    return (
        <div>
            {!hasData && <h1>Loading...</h1>}
            {hasData > 0 && (
                <div>
                    <h1>nome do pais : {countryInfo.name.common}</h1>
                    <h1>população : {countryInfo.population}</h1>
                    <h1>população : {countryInfo.capital}</h1>
                </div>
            )}
        </div>
    );
}

export default CountryPage;
