import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './redux/store/configureStore';
import { addExpense } from './redux/actions/expenses';
import { setTextFilter } from './redux/actions/filters';
import getVisibleExpenses from './redux/selectors/expenses';
import './styles/styles.scss';

const store = configureStore();
console.log(store.getState());


store.dispatch(addExpense({
    description: "Water bill",
    amount: 15000,
    createdAt: 1
}));

store.dispatch(addExpense({
    description: "Gas bill",
    amount: 200000,
    createdAt: 5
}));

console.log(store.getState());


store.dispatch(setTextFilter('bill'));

const expenses = store.getState().expenses;
const filters = store.getState().filters;
console.log(getVisibleExpenses(expenses, filters));



ReactDOM.render(<AppRouter />, document.getElementById('app'));
