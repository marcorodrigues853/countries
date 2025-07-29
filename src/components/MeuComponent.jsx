import { useRef } from 'react';
// Este componente utiliza referências (useRef) para manipular diretamente elementos DOM.
// Importa o hook useRef do React.
function MeuComponente() {
    const meuInputRef = useRef(null);
    const meuInputRefButton = useRef(null);
    const meuInputRefAtiveButton = useRef(null);

    // Função que coloca o foco no input de texto
    const focarInput = () => {
        meuInputRef.current.focus();
        console.log('meuInputRef', meuInputRef);
    };

    // Função que desativa o input e o botão de desativar, ativa o botão de ativar e muda a cor do botão para cinzento
    const desativarInput = () => {
        meuInputRef.current.disabled = true;
        meuInputRefButton.current.disabled = true;
        meuInputRefButton.current.style.backgroundColor = 'gray';
        meuInputRefAtiveButton.current.disabled = false;
    };

    // Função que ativa o input e o botão de desativar, desativa o botão de ativar e repõe a cor original do botão
    const ativarInput = () => {
        meuInputRef.current.disabled = false;
        meuInputRefButton.current.disabled = false;
        meuInputRefButton.current.style.backgroundColor = '';
        meuInputRefAtiveButton.current.disabled = true;
    };

    // Função que alterna o estado de disabled do input e muda a cor de fundo conforme o estado
    const toogleDisabledInput = () => {
        meuInputRef.current.disabled = !meuInputRef.current.disabled;
        meuInputRef.current.style.backgroundColor = meuInputRef.current.disabled
            ? 'royalblue'
            : 'red';

        meuInputRef.current.className = 'card';
    };
    console.log('current', meuInputRef);

    // warm up  ao clicar no desactiva  Button, preciso que a cor do botão mude para azul e o botão fique com disabled
    return (
        <>
            <input min={2} max={10} ref={meuInputRef} type="text" />

            <button onClick={focarInput}>Foca +</button>
            <button ref={meuInputRefButton} onClick={desativarInput}>
                Desativa input +
            </button>
            <button ref={meuInputRefAtiveButton} onClick={ativarInput}>
                Ativa input +
            </button>
            <button onClick={toogleDisabledInput}>TOOGLE</button>
        </>
    );
}
export default MeuComponente;
