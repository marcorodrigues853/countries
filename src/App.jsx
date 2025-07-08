import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';

function App() {
    const [contador, setContador] = useState(1);
    return (
        <Card>
            <Button
                label={`ver mais ${contador} `}
                // onClick={() => setContador(contador + 1)}
                onClick={() => {
                    setContador((prev) => {
                        return prev + 1;
                    });
                }}
            />
            <div style={{ padding: '20px', display: 'flex', gap: '16px' }}>
                <Button label={'incrementa + 3'} />
                <Button label={'decrementa - 3'} />
                <Button label={'reset'} />
            </div>

            <Card>
                <h4>Enunciado:</h4>
                <ul className="trolha">
                    <li>
                        utilizar o botão para no onclick ele incrementar o valor
                        de mais 1
                    </li>
                    <li>
                        Segundo Botão que diga reset e que mude o contador para
                        1
                    </li>
                    <li>
                        Acrescentar dois botões em que um incrementa +3 o outro
                        decrementa -3
                    </li>
                    <li>Nota o decremento não pode ser inferior a 0</li>
                </ul>
            </Card>
        </Card>
    );
}

export default App;
