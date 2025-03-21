import React, { useState } from 'react';
import SimpleForm from '../components/simpleForm';
import { useFactorial } from '../../customHooks/useFactorial';
import { useFibonacci } from '../../customHooks/useFibonacci';

import './ExampleWorker.scss';

const ExampleWorker: React.FunctionComponent = () => {
    const [data, setData] = useState('');
    const [error, setError] = useState(null);

    // Хуки для вычислений
    const {factorial: factorialValue, isCalculation: factorialIsCalculation, getFactorial} = useFactorial();
    const {result: fibonacciValue, isCalculation: fibonacciIsCalculation, run: getFibonacci} = useFibonacci();

    const onCalculate = (value: string) => {
        if (value === '' || isNaN(+value)) {
            setError('Введенное значение не является числом! Пожалуйста повторите ввод значения...');
        } else {
            getFactorial(+value);
            getFibonacci(+value);
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
            {(factorialIsCalculation || fibonacciIsCalculation)
                ? (
                    <div className='exampleWorker-parent-loading'>
                        <p>Идут вычисления...</p>
                    </div>    
                ) :(
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
                )}
        </div>
    )
}

export default ExampleWorker;
