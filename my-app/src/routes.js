import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AddTask from './components/AddTask';
import Estado from './components/Estado'
import Resume from './components/Resume';
import Login from './components/Login';
import Map from './components/Map';
import Inscription from './components/Inscription';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login} />
        <Route path="/add-task" component={AddTask} />
        <Route path="/estado" component={Estado} />
        <Route path="/resume" component={Resume} />        
        <Route path="/map" component={Map} />
        <Route path="inscription" component={Inscription} />
    </Route>
)