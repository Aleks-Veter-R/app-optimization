import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const rootContainer = createRoot(rootElement);

rootContainer.render(
    <div>
        React project!
    </div>,
);
