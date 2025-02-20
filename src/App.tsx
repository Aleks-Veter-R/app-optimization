import { useEffect } from 'react';
import { getTest } from '../rests/rests/fetchFns'
import ExampleWorker from './components/ExampleWorker'

const App = () => {
    useEffect(() => {
        getTest('http://localhost:9090/test-rest');
    }, []);

    return (
        <div>
            App
            <div>
                <ExampleWorker />
            </div>
        </div>
    );
}

export default App;
