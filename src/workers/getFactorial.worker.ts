const getFactorial = (num: number): number => {
    return num === 1
        ? num
        : num * getFactorial(num - 1);
}

onmessage = (event) => {
    postMessage(getFactorial(event.data));
};
