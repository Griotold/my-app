import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import ListPage from './pages/ListPage';

function App() {
    return (
        <div>
            <ListPage />
        </div>
    );
}

export default App;
