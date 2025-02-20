import { useState } from 'react';

interface IUseFactorial {
    factorial: number | null;
    error: ErrorEvent;
    isCalculation: boolean;
    getFactorial: (value: number) => void;
}

export const useFactorial = (): IUseFactorial => {
    const [factorial, setFactorial] = useState(null);
    const [error, setError] = useState(null);
    const [isCalculation, setIsCalculation] = useState(false);

    const getFactorial = (value: number) => {
        setIsCalculation(true);

        const worker = new Worker(
            new URL('../workers/getFactorial.worker.ts', import.meta.url)
        );

        worker.onmessage = (event) => {
            setFactorial(event.data);
            setIsCalculation(false);
            worker.terminate();
        }

        worker.onerror = (error) => {
            setError(error.message);
            setIsCalculation(false);
        }

        worker.postMessage(value);
    }

    return {
        factorial,
        error,
        isCalculation,
        getFactorial,
    }
}
