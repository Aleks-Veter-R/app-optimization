import { delay, http, HttpResponse } from 'msw';

const isError = false;
const delayTime = 5000;

export const handlers = [
    http.get('http://localhost:9090/test-rest',
        async () => {
            const testData = JSON.stringify({test:'Test'});

            const responseBody = isError ? null : testData;

            await delay(delayTime);

            return new HttpResponse(
                responseBody,
                {
                    status: isError ? 401 : 200,
                    statusText: isError ? 'Not Found' : '',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )
        }
    ),
];
