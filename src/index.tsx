import { createRoot } from 'react-dom/client';
import App from './App';

async function enableMocking() {
    if (process.env.NODE_ENV === 'development') {
        const { server } = await import('../mocks/node');

        return server.start({ quiet: true });
    }

    return Promise.resolve();
}

const rootElement = document.getElementById('root');
const rootContainer = createRoot(rootElement);

enableMocking().then(() => {
    rootContainer.render(
        <div>
            <App />
        </div>,
    ); 
});
