import { useEffect } from 'react';
import { getTest } from '../rests/rests/fetchFns'

const App = () => {
    useEffect(() => {
        getTest('http://localhost:9090/test-rest');
    }, []);

    return <div>App</div>
}

export default App;
