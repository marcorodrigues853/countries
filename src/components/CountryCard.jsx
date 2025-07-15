// exercicio Country Card

import Card from './Card';

function CountryCard({ flag, name, capital }) {
    return (
        <Card>
            <img src={flag} alt={name} />
            <h4>{name}</h4>
            <p>{capital}</p>
        </Card>
    );
}

export default CountryCard;
