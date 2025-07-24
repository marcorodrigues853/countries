// Importa o componente Link da biblioteca react-router
import { Link } from 'react-router';
// Importa o componente Button do ficheiro local Button
import Button from './Button';
// Importa o componente Badge do ficheiro local Badge
import Badge from './Badge';

// Define o componente funcional HeaderWithImage que recebe várias props
function HeaderWithImage({
    name, // Nome do país
    official, // Nome oficial do país
    region, // Região do país
    subregion, // Sub-região do país
    continents, // Lista de continentes associados ao país
    flags, // Objeto com informações sobre a bandeira do país
}) {
    return (
        // Div principal que contém o cabeçalho com imagem
        <div className="header-with-image">
            {/* Div que contém as informações do cabeçalho */}
            <div className="header-info">
                <div>
                    {/* Título com o nome do país */}
                    <h1>{name}</h1>
                    {/* Parágrafo com o nome oficial do país */}
                    <p>{official}</p>
                    <div>
                        {/* Mostra um Badge com a região */}
                        <Badge>{region}</Badge>
                        {/* Mostra um Badge com a sub-região, se existir */}
                        {subregion && <Badge>{subregion}</Badge>}
                        {/* Itera sobre os continentes e cria um Badge para cada um */}
                        {continents.map((continent) => (
                            <Badge key={continent}>{continent}</Badge>
                        ))}
                    </div>
                </div>

                {/* Div que contém a bandeira do país */}
                <div className="flag-container">
                    {/* Mostra a imagem da bandeira com o atributo alt dinâmico */}
                    <img src={flags.svg} alt={flags.alt || `Flag of ${name}`} />
                </div>
            </div>
            {/* Link que redireciona para a página inicial */}
            <Link to="/">
                {/* Botão com o texto "Voltar" */}
                <Button label={'Voltar'} />
            </Link>
        </div>
    );
}

// Exporta o componente HeaderWithImage como padrão
export default HeaderWithImage;
