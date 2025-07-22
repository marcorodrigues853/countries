import { Link } from 'react-router';
import RegionCard from '../components/RegionCard';

function RegionsPage() {
    const regions = [
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania',
        'Antarctic',
    ];

    const regionsArrayDeObjetos = [
        { name: 'Africa', image: '/assets/react.svg' },
        { name: 'Americas', image: '' },
        { name: 'Oceania', image: '' },
        { name: 'Europe', image: '' },
        { name: 'Antarctic', image: '' },
    ];

    return (
        <div>
            {/* Título principal da página */}
            <h1>Bem vindo à página Regions</h1>
            
            {/* Container para exibir os cartões de regiões usando o array 'regions' */}
            <div className="grid">
                {regions.map((name) => {
                    // Para cada região no array 'regions', cria um link para a página da região e exibe um cartão
                    return (
                        <Link to={`/region/${name}`}>
                            <RegionCard name={name} />
                        </Link>
                    );
                })}
            </div>

            {/* Título para exibir regiões usando o array de objetos 'regionsArrayDeObjetos' */}
            <h1>Bem vindo à página Regions em um array de Objetos</h1>
            
            {/* Container para exibir os cartões de regiões usando o array 'regionsArrayDeObjetos' */}
            <div className="grid">
                {regionsArrayDeObjetos.map((region) => {
                    // Para cada objeto no array 'regionsArrayDeObjetos', cria um link para a página da região e exibe um cartão com nome e imagem
                    return (
                        <Link to={`/region/${region.name}`}>
                            <RegionCard
                                name={region.name}
                                image={region?.image} // Usa a imagem se estiver disponível
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default RegionsPage;

/// Na pagina de detalhes aka RegionDetailPage
// https://restcountries.com/v3.1/region/europe
// lista os paises com o CountryCard já existene
