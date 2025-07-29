import CountryBorders from '../components/CountryBorders';
import CountryThatTalks from '../components/CountryThatTalks';
import ContadorSecreto from '../components/exercicio/ContadorSecretSol';
import MeuComponente from '../components/MeuComponent';
import NavBar from '../components/NavBar';
import SpeakLanguage from '../components/SpeakLanguage';

function Homepage() {
    const languagesObject = {
        spa: 'Spanish',
        pt: 'Portuguese',
        ger: 'German',
        wng: 'english',
    };

    const valorsDoObjecto = Object.values(languagesObject);

    // console.log('valorsDoObjecto', valorsDoObjecto);

    return (
        <>
            <h1>Homepage</h1>
            <MeuComponente />
            {/* <ContadorSecreto /> */}
            {/* {valorsDoObjecto.map((valor) => {
                return <SpeakLanguage lang={valor} />;
            })} */}
            {/* <CountryBorders borderCodes={['br', 'cub']} /> */}

            {/* <CountryThatTalks language={'spanish'} /> */}
            {/* <SpeakLanguage lang="portuguese" />
            <SpeakLanguage lang="spanish" />
            <SpeakLanguage lang="german" /> */}
        </>
    );
}

export default Homepage;
