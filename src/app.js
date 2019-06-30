import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './redux/store/configureStore';
import { addExpense } from './redux/actions/expenses';
import { setTextFilter } from './redux/actions/filters';
import getVisibleExpenses from './redux/selectors/expenses';
import './styles/styles.scss';

const store = configureStore();


store.dispatch(addExpense({
    description: "Water bill",
    amount: 15000,
    createdAt: 6
}));

store.dispatch(addExpense({
    description: "Gas bill",
    amount: 200000,
    createdAt: 5
}));

store.dispatch(addExpense({
    description: "Electricity bill",
    amount: 210000,
    createdAt: 8
}));



const expenses = store.getState().expenses;
const filters = store.getState().filters;

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
