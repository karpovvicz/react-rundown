
import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesList from './ExpensesList';

import './Expenses.css';

const Expenses = (props) => {


    return (
        <Card className="expenses">
            <ExpensesList />

        </Card>
    );
}

export default Expenses;
