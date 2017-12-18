import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AddTask from './components/AddTask';
import Estado from './components/Estado'
import Resume from './components/Resume';
import Login from './components/Login';
import Map from './components/Map';
import Listhive from './components/Listhive';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="/add-task/:id/status/:status" component={AddTask} />
        <Route path="/estado/:id" component={Estado} />
        <Route path="/resume" component={Resume} />        
        <Route path="/map" component={Map} />
        <Route path="/list-hive" component={Listhive} />
    </Route>
)