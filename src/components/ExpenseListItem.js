import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = ({expense, dispatch}) => (
    <li>
        <Link to={`edit/${expense.id}`}>
        { expense.description }
    </Link> 
        - { numeral(expense.amount/100).format('€0.0,00') } 
        ({moment(expense.createdAt).locale('nl').format('DD-MMMM-YYYY')})
    </li>
);


export default ExpenseListItem;