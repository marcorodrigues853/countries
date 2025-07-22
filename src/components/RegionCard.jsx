import { Link } from 'react-router';
import Card from './Card';

function RegionCard({ name, image }) {
    return (
        <Card>
            <img src={image ?? ''} />
            <h1>{name}</h1>
        </Card>
    );
}

export default RegionCard;

// O código já exporta o componente RegionCard corretamente.
