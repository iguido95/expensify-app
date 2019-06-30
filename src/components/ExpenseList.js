import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../redux/selectors/expenses';

const ExpenseList = (props) => {
    props.expenses.forEach((expense) => {console.log(<ExpenseListItem expense={expense} />) })
    return (<div>
                {props.expenses.map((expense) => (
                    <ExpenseListItem key={expense.id} expense={expense} />
                ))}
            </div>)
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
