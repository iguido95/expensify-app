import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import { visible } from 'ansi-colors';

// ACTIONS

// add_expense
const addExpense = (
    { description = '', note = '', amount = 0, createdAt = 0} = {}
    ) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description: description,
        note: note,
        amount: amount,
        createdAt: createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id: id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});


// Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(item => (item.id !== action.id));
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...state.updates
                    }
                } else {
                    return expense;
                }
            });
        default: 
            return state;
    }
};

// ACTIONS for Filter
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: "CHANGE_FILTER",
    updates: { text: text }
});
// SET_START_DATE 
const setStartDate = (startDate) => ({
    type: "CHANGE_FILTER",
    updates: { startDate: startDate }
});
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: "CHANGE_FILTER",
    updates: { endDate: endDate }
});


// SORT_BY_DATE
const sortByDate = () => ({
    type: "CHANGE_FILTER",
    updates: { sortBy: 'date' }
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: "CHANGE_FILTER",
    updates: { sortBy: 'amount' }
});


// Filter reducer 
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'CHANGE_FILTER':
            return { ...state, ...action.updates };
        default:
            return state;
    }
};

// Get filtered expenses 
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount > b.amount ? 1 : -1;
        }
    });
};

// Store creation

const store = createStore(
   combineReducers({ 
       expenses: expensesReducer,
       filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: "Huur", amount: 72500, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: "Snoep", amount: 150, createdAt: 2000 }));
// store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
store.dispatch(editExpense({ 
    id: expenseOne.expense.id, 
    updates: { amount: 75000 } 
}));

store.dispatch(setTextFilter('huur'));
store.dispatch(sortByDate());
store.dispatch(sortByAmount());
store.dispatch(setStartDate(3000));
store.dispatch(setEndDate());



const demoState = {
    expenses: [{
        id: '123456',
        description: "Huur Januari",
        note: "eerste betaling van het jaar",
        amount: 65000,
        createdAt: 0
    }],
    filters: {
        text: 'huur',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};


