import { useState, useEffect, useRef } from "react"

const workerHeandler = (fn: Function) => {
    onmessage = (event) => {
        postMessage(fn(event.data));
    }
}

export const useWebWorker = (fn: Function) => {
    const [result, setResult] = useState(null);

    const workerRef =useRef(null);

    useEffect(() => {
        const worker = new Worker(
            URL.createObjectURL(new Blob([
                `(${workerHeandler})(${fn})`
            ]))
        );

        workerRef.current = worker;

        worker.onmessage = (event) => {
            setResult(event.data);
        };

        return () => {
            worker.terminate();
        };
    }, [fn]);

    return {
        result,
        run: (value: number) => workerRef.current.postMessage(value),
    }
}
