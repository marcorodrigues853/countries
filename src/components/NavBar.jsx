import { Link } from 'react-router';
import CountryBorders from './CountryBorders';

function NavBar() {
    return (
        <nav>
            <Link to={'/'}>Homepage</Link>
            <Link to={'/continents'}>Continents</Link>
            <Link to={'/countries'}>Countries</Link>
            <Link to={'/regions'}>Regions</Link>
        </nav>
    );
}

export default NavBar;
