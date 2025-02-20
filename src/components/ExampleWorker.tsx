import React, { useState } from 'react';
import SimpleForm from './simple-form/SimpleForm';

import '../styles/ExampleWorker.scss';

const ExampleWorker: React.FunctionComponent = () => {
    const [data, setData] = useState('');
    const [error, setError] = useState(null);
    const [fibonacciValue, setFibonacci] = useState(null);
    const [factorialValue, setFactorial] = useState(null);

    const onCalculate = (value: string) => {
        console.log(value);

        if (value === '' || isNaN(+value)) {
            setError('Введенное значение не является числом! Пожалуйста повторите ввод значения...');
        }
    }

    const onSetValue = (value: string) => {
        setError(null);
        setData(value);
    }

    return (
        <div className='exampleWorker-parent-simpleForm'>
            <div className='exampleWorker-wrapper-simpleForm'>
                <SimpleForm
                    value={data}
                    placeholder='Введите число...'
                    onSentForm={onCalculate.bind(this, data)}
                    onChange={onSetValue}
                />
                {error && <div className='exampleWorker-error'>
                    <p>{error}</p>
                </div>}
            </div>
            <div className='exampleWorker-parent-result'>
                <div>
                    <p>Fibonacci:</p>
                    <p>{fibonacciValue !== null ? fibonacciValue : '-'}</p>
                </div>
                <div>
                    <p>Factorial:</p>
                    <p>{factorialValue !== null ? factorialValue : '-'}</p>
                </div>
            </div>
        </div>
    )
}

export default ExampleWorker;
