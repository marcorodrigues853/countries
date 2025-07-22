import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';

import Card from '../components/Card';
import CountryCard from '../components/CountryCard';

function CountryDetailPage() {
    const { name } = useParams();

    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch country data by name
                const response = await fetch(
                    `https://restcountries.com/v3.1/name/${name}?fullText=true`
                );

                if (!response.ok) {
                    throw new Error('Country not found');
                }

                const data = await response.json();
                const countryData = data[0];
                setCountry(countryData);

                // Fetch border countries if they exist
                if (countryData.borders && countryData.borders.length > 0) {
                    const bordersResponse = await fetch(
                        `https://restcountries.com/v3.1/alpha?codes=${countryData.borders.join(
                            ','
                        )}`
                    );
                    const bordersData = await bordersResponse.json();
                    setBorderCountries(bordersData);
                }

                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchCountryData();
    }, [name]);

    if (!country) return null;

    return (
        <div className="country-detail">
            <CountryCard
                flag={country.flags.png}
                name={country.name.common}
                capital={country.capital}
            />

            {/* <div className="detail-content">
                <Card
                    className="visual-section"
                    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                    {country.coatOfArms?.png && (
                        <div className="coat-of-arms">
                            <img
                                src={country.coatOfArms.png}
                                alt="Coat of Arms"
                            />
                            <p className="coat-label">Coat of Arms</p>
                        </div>
                    )}
                </Card>
            </div> */}
        </div>
    );
}

export default CountryDetailPage;
