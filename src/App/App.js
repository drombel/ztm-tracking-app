import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './../components/header';
import NotFound from '../views/NotFound';
import router from './../router';
import './App.scss';

function App() {
    return (
        <div className="App min-vh-100">
            <Router>
                <div>
                    <Header />
                    <main className='min-vh-100'>
                        <Switch>
                            {router.map((item, key) => <Route exact={item.exact} path={item.to} key={key} component={item.component} />)}
                            <Route component={NotFound} />
                        </Switch>
                    </main>
                </div>
            </Router>
        </div>
    );
}

export default App;
