import React from 'react';
import ExpenseList from './expense-list';
import ExpenseListFilters from './expense-list-filters';
import ExpensesSummary from './expenses-summary';

const Dashboard = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default Dashboard;