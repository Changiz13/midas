import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/app-router';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

console.log('test');
const store = configureStore();
const JSX = (
  <Provider store ={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(JSX, document.getElementById('app'));