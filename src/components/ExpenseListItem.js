import React from 'react';

const ExpenseListItem = ({expense}) => (
    <li>{ expense.description } - { expense.amount }</li>
);

export default ExpenseListItem;