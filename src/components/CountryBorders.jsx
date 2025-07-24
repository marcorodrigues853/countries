import { useEffect, useState } from 'react'; // Importa os hooks useEffect e useState do React.
import Card from './Card'; // Importa o componente Card do ficheiro local.
import { Link } from 'react-router'; // Importa o componente Link da biblioteca react-router.

function CountryBorders({ borderCodes }) {
    // Define o componente funcional CountryBorders que recebe a prop borderCodes.
    console.log('borderCodes', borderCodes); // Imprime os códigos das fronteiras no console para debug.
    // URL da API para obter informações sobre países com base nos códigos fornecidos.

    const [countries, setCountries] = useState([]); // Define o estado countries como um array vazio e a função setCountries para atualizá-lo.

    useEffect(() => {
        // Hook useEffect para executar código quando o componente é montado ou quando borderCodes muda.
        const fetchCountriesByCodes = async () => {
            // Define uma função assíncrona para buscar os dados dos países.
            const concatenatedByComma = borderCodes.join(','); // Junta os códigos das fronteiras numa string separada por vírgulas.

            const data = await fetch(
                // Faz uma chamada à API para obter os dados dos países.
                `https://restcountries.com/v3.1/alpha?codes=${concatenatedByComma}&fields=cca3,name,flags`
            );

            const response = await data.json(); // Converte a resposta da API para JSON.
            setCountries(response); // Atualiza o estado countries com os dados recebidos.
        };

        fetchCountriesByCodes(); // Chama a função para buscar os dados dos países.
    }, [borderCodes]); // O useEffect será executado sempre que borderCodes mudar.

    return (
        <Card>
            {' '}
            {/* Renderiza o componente Card como contêiner. */}
            <h1>CountryBorders</h1> {/* Título do componente. */}
            {countries.map((country) => {
                // Itera sobre o array countries para renderizar os dados de cada país.
                return (
                    <Link to={`/country/${country.name.common}`}>
                        {' '}
                        {/* Cria um link para a página do país com base no nome comum. */}
                        <h1>{country.name.common}</h1>{' '}
                        {/* Exibe o nome comum do país. */}
                    </Link>
                );
            })}
        </Card>
    );
}

export default CountryBorders; // Exporta o componente CountryBorders como padrão.
