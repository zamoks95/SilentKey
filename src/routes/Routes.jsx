import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import Template from '@/pages/Template';
import Snake from '@/pages/Snake';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/template' component={Template} />
        <Route exact path='/snake' component={Snake} />
      </Switch>
    </Router>
  );
}
