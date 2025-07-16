import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import CountryCard from './components/CountryCard';
import CountriesList from './components/CountriesList';

function App() {
    const [currentName, setCurrentName] = useState('N/A');
    const [age, setAge] = useState(18);

    useEffect(() => {
        console.log('useEffect Marco');
    }, []);

    useEffect(() => {
        console.log(
            'useEffects com dependências name:' + currentName + 'age: ',
            age
        );
    }, [currentName, age]);

    useEffect(() => {
        console.log('sem dependencia nenhuma o CHATO!!!');
    });

    const [selectedMoeda, setSelectedMoeda] = useState('eur');
    const [paises, setPaises] = useState([]);
    const [search, setSearch] = useState('');

    // useEffect(() => {
    //     console.log('dependencias vazias');
    //     //  recolher dados na API
    //     const fetchData = async () => {
    //         const data = await fetch(
    //             `https://restcountries.com/v3.1/currency/${selectedMoeda}`
    //         );
    //         const countries = await data.json();

    //         setPaises(countries);
    //     };

    //     fetchData();

    //     // guardar o que vem da a API
    // }, [selectedMoeda]);

    const filteredCountries = paises.filter((pais) => {
        return String(pais.name.common)
            .toLowerCase()
            .includes(search.toLowerCase());
    });

    return (
        <CountriesList />
        // <div>

        //     <label>NOME:</label>
        //     <textarea
        //         onChange={(event) => {
        //             const newName = event.target.value;
        //             setCurrentName(newName);
        //         }}
        //     />
        //     <label htmlFor="">Idade</label>
        //     <input
        //         type="number"
        //         value={age}
        //         onChange={(event) => {
        //             const newAge = event.target.valueAsNumber;
        //             setAge(newAge);
        //         }}
        //     />
        // </div>
        // <div>
        //     <h1>bye bye {selectedMoeda}!</h1>
        //     <Button
        //         label={'eur'}
        //         onClick={() => {
        //             setSelectedMoeda('eur');
        //         }}
        //     />

        //     <Button
        //         label={'usd'}
        //         onClick={() => {
        //             setSelectedMoeda('usd');
        //         }}
        //     />
        //     <Button
        //         label={'cop'}
        //         onClick={() => {
        //             setSelectedMoeda('cop');
        //         }}
        //     />

        //     <input
        //         value={search}
        //         type="text"
        //         onChange={(event) => {
        //             const newValue = event.target.value;
        //             setSearch(newValue);
        //         }}
        //     />
        //     <div className="grid grid-4">
        //         {filteredCountries.map((pais) => {
        //             return (
        //                 <Card key={pais.cca3}>
        //                     <img
        //                         src={pais.flags?.png}
        //                         alt="flag"
        //                         className="flag"
        //                     />
        //                     <h4>{pais.name.common}</h4>
        //                     <span>{pais.subregion}</span>
        //                 </Card>
        //             );
        //         })}
        //     </div>
        // </div>
    );
}

export default App;
