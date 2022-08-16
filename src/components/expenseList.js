import React from 'react';
import ExpenseItem from './expenseItem';

const ExpenseList = () => {
    const expenses = [
        {id: 12312342, name: 'Shopping', cost: 50 },
        {id: 12312342, name: 'Holiday', cost: 300 },
        {id: 12312342, name: 'Transport', cost: 70 },
        {id: 12312342, name: 'Fuel', cost: 40 },
        {id: 12312342, name: 'Food', cost: 20 },
    ];

    return (
        <ul className='list-group'>
            {expenses.map((expense) => (
                <ExpenseItem 
                    id={expense.id} 
                    name={expense.name}
                    cost={expense.cost} /> 
            ))}
        </ul>
    );
};

export default ExpenseList; 