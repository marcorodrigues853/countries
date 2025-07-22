function CurrencyCountryCard({ flag, name }) {
    return (
        <div className="card">
            <img src={flag} alt={name} />
            <h2>{name}</h2>
        </div>
    );
}

export default CurrencyCountryCard;
