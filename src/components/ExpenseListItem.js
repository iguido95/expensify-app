import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../redux/actions/expenses';


const ExpenseListItem = ({expense, dispatch}) => (
    <li>{ expense.description } - { expense.amount/100 } ({expense.createdAt}) - <button onClick={() => {
        dispatch(removeExpense({id: expense.id}))}}>Delete</button></li>
);


export default connect()(ExpenseListItem);