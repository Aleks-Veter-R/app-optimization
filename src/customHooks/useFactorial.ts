import { useState } from 'react';

interface IUseFactorial {
    factorial: number | null;
    error: ErrorEvent;
    getFactorial: (value: number) => void;
}

export const useFactorial = (): IUseFactorial => {
    const [factorial, setFactorial] = useState(null);
    const [error, setError] = useState(null);

    const getFactorial = (value: number) => {
        const worker = new Worker(
            new URL('../workers/getFactorial.worker.ts', import.meta.url)
        );

        worker.onmessage = (event) => {
            setFactorial(event.data);
            worker.terminate();
        }

        worker.onerror = (error) => {
            setError(error.message);
        }

        worker.postMessage(value);
    }

    return {
        factorial,
        error,
        getFactorial,
    }
}
