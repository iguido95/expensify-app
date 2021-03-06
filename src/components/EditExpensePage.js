import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../redux/actions/expenses';

const EditExpensePage = (props) => {
  return(
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExpense({id: props.expense.id}));
        props.history.push('/');
      }}>Delete
      </button>
    </div>
  );

};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => {
    return expense.id === props.match.params.id;
  })
});

export default connect(mapStateToProps)(EditExpensePage);
