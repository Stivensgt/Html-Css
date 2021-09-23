import Layout from "layout/layout";
import Index from "pages";
import BorderCollie from "pages/borderCollie";
import RhodesianInfoPage from "pages/rhodesiam";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Layout> 
            <Switch>
                <Route path= '/rhodesiam'>
                    <RhodesianInfoPage />
                </Route>
                <Route path= '/borderCollie'>
                    <BorderCollie/>
                </Route>
                <Route path='/' >
                    <Index />
                </Route>
            </Switch>
            </Layout> 
        </Router>
    </div>
  );
}


export default App;
