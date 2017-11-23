import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AddTask from './components/AddTask';
import Test from './components/Test'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={AddTask} />
        <Route path="/add-task" component={AddTask} />
        <Route path="/test" component={Test} />
    </Route>
)