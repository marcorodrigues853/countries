import { Link } from 'react-router';

function NavBar() {
    return (
        <div style={{ display: 'flex', gap: '16px' }}>
            <Link to={'/'}>Homepage</Link>
            <Link to={'/continents'}>Continents</Link>
            <Link to={'/countries'}>Countries</Link>
            <Link to={'/batatas'}>Batatas</Link>
        </div>
    );
}

export default NavBar;
