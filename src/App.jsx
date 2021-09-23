import Layout from "layout/layout";
import Index from "pages";
import borderCollie from "pages/borderCollie";
import RhodesianInfoPage from "pages/rhodesiam";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
            <Layout> 
                <Route path= '/rhodesiam'>
                    <RhodesianInfoPage />
                </Route>
                <Route path= '/borderCollie'>
                    <borderCollie />
                </Route>
                <Route path='/' exact>
                    <Index />
                </Route>
                </Layout> 
            </Switch>
        </Router>
    </div>
  );
}


export default App;
