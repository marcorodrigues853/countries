import { useState } from 'react';
import Card from './Card';
import Button from './Button';

function WrapAulaUseState() {
    const [contador, setContador] = useState(1);
    const [currentName, setCurrentName] = useState('N/a');

    const [names, setCurrenNames] = useState([
        'marco',
        'ze',
        'to',
        'ny',
        'carreira',
    ]);

    return (
        <Card>
            <Button
                label={`ver mais ${contador} `}
                onClick={() => {
                    setContador((prev) => {
                        return prev + 1;
                    });
                }}
            />
            <Card style={{ padding: '20px', display: 'flex', gap: '16px' }}>
                <Button
                    label={'reset'}
                    onClick={() => {
                        setContador(0);
                    }}
                />

                <Button
                    label={'incrementa + 3'}
                    onClick={() => {
                        setContador((prev) => prev + 3);
                    }}
                />
                <Button
                    label={'decrementa - 3'}
                    onClick={() => {
                        setContador((prev) => {
                            return prev - 3 >= 0 ? prev - 3 : prev;
                        });
                    }}
                />
            </Card>

            <Card>
                <h1>
                    <strong>My name is:</strong> {currentName}
                </h1>
                <div className="grid grid-4">
                    <Button
                        label={'marco'}
                        onClick={() => {
                            setCurrentName('marco');
                        }}
                    />
                    <Button
                        label={'ze'}
                        onClick={() => {
                            setCurrentName('ze');
                        }}
                    />
                    <Button
                        label={'manel'}
                        onClick={() => {
                            setCurrentName('manel');
                        }}
                    />
                    <Button
                        label={'maria'}
                        onClick={() => {
                            setCurrentName('maria');
                        }}
                    />

                    {names.map((name) => {
                        return (
                            <Button
                                label={name}
                                onClick={() => {
                                    setCurrentName(name);
                                }}
                            />
                        );
                    })}

                    <input
                        type="text"
                        onChange={(event) => {
                            console.log('event', event.target.value);
                            const newName = event.target.value;
                            setCurrentName(newName);
                        }}
                    />
                </div>
            </Card>

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
                    <li>
                        4 novos botões com nomes de colegas, estes botões ao
                        serem pressionados terão que marcar no H1 o nome que foi
                        clicado{' '}
                    </li>
                </ul>
            </Card>
        </Card>
    );
}

export default WrapAulaUseState;
