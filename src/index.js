import REACT from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Hello() {
    return <div>
        <h1>Hello World</h1>
    </div>
}
root.render(
    <><Hello /><Hello /><Hello /><Hello /></>
    
    )