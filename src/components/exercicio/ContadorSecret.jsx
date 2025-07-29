import { useRef } from 'react';

function ContadorSecreto() {
    // 1. Crie a sua ref aqui, inicializada com 0.
    const contadorRef = '???';

    const incrementarContador = () => {
        // 2. Incrementar o valor guardado na ref.
        // Lembrar de aceder à propriedade .current
        console.log('Clique registado, mas sem re-renderizar!');
    };

    const mostrarNaConsola = () => {
        // 3. Ler o valor atual da ref e mostre na consola.
    };

    return (
        <div>
            <h2>Contador Secreto</h2>
            <p>
                A contagem de cliques está a ser guardada, mas não a consegue
                ver aqui.
            </p>
            <button onClick={incrementarContador}>Clique Aqui!</button>
            <button onClick={mostrarNaConsola}>
                Mostrar Contagem na Consola
            </button>
        </div>
    );
}

export default ContadorSecreto;
