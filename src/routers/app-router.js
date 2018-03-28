import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/dashboard';
import NotFound from '../components/not-found';
import AddExpense from '../components/add-expense';
import EditExpense from '../components/edit-expense';
import LoginPage from '../components/login-page';
import PrivateRoute from '../routers/private-route';
import PublicRoute from '../routers/public-route';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/create" component={AddExpense} />
        <PrivateRoute path="/edit/:id" component={EditExpense} />
        <Route component={NotFound} />
      </Switch>
    </div>  
  </Router>
);

export default AppRouter;