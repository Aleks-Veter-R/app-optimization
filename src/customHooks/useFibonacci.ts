import { useWebWorker } from "./useWebWorker";

// Использовано именованное функциональное выражение, т.к
// со стрелочной функцией не работает (выдает ошибку)
const fiboFn = function fibonacci(value: number): number {
    if (value < 3) return value - 1;

    return fibonacci(value - 2) + fibonacci(value - 1)
}

export const useFibonacci = () => {
    return useWebWorker(fiboFn);
}
