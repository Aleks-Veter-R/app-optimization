import { showResult } from '../utils';

export const getTest = (url: string) => {
    return (
        fetch(url)
        .then((response) => {
            if (!response.ok) throw new Error('Ошбика запроса: ' + response.status);

            console.log('Fetch getTest - ok!');

            return response.json();
        })
        .then((result) => {
            showResult(result);
        })
        .catch((error) => {
            console.log(error);
        })        
    );
};
