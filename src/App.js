import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';
function App() {
    return (
        <div>
            <Navigation />
            <Switch>
                <Route path="/" exact component={ListPage} />
                <Route path="/write" exact component={WritePage} />
            </Switch>
        </div>
    );
}

export default App;
