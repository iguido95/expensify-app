import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({expense, dispatch}) => (
    <li><Link to={`edit/${expense.id}`}>{ expense.description }</Link> - { expense.amount/100 } ({expense.createdAt})</li>
);


export default ExpenseListItem;