import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AddTask from './components/AddTask';
import Estado from './components/Estado'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={AddTask} />
        <Route path="/add-task" component={AddTask} />
        <Route path="/estado" component={Estado} />
    </Route>
)