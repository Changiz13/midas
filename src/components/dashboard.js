import React from 'react';
import ExpenseList from './expense-list';
import ExpenseListFilters from './expense-list-filters';

const Dashboard = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default Dashboard;