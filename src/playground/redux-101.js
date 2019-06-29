import { createStore } from 'redux';

const store = createStore((state = { count: 0 }) => {
    return state;
});

const storeState = store.getState();
console.log(storeState);



console.log(storeState);