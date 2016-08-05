import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navbar from './components/navbar';
import Index from './components/index';
import New from './components/new';
import Show from './components/show';

export default(
  <Route path="/" component={Navbar}>
    <IndexRoute component={Index} />
    <Route path="/new" component={New} />
    <Route path="/:id" component={Show} />
  </Route>
);
