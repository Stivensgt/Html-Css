import Index from "pages";
import RhodesianInfoPage from "pages/rhodesiam";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path= '/rhodesiam'>
                    <RhodesianInfoPage />
                </Route>
                <Route path='/'>
                    <Index />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}


export default App;
