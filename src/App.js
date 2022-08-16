import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/budget';
import Remaining from './components/remaining';
import ExpenseTotal from './components/expenseTotal';
import ExpenseList from './components/expenseList';
import AddExpenseForm from './components/expenseForm';
import { AppProvider } from './context/appContext';

const App = () => {
  return (
    <AppProvider>
      <div className='container'>

        <h1 className='mt-3'>Budget Planner</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div class='col-sm'>
            <ExpenseTotal />
          </div>
        </div>

        <h3 className='mt-3'>Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>

        <h3 className='mt-3'>Add Expense</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;