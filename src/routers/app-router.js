import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/dashboard';
import NotFound from '../components/not-found';
import Help from '../components/help';
import AddExpense from '../components/add-expense';
import EditExpense from '../components/edit-expense';
import Header from '../components/header';
import LoginPage from '../components/login-page';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>  
  </Router>
);

export default AppRouter;