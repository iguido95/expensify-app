// ACTIONS for Filter
// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: "CHANGE_FILTER",
    updates: { text: text }
});
// SET_START_DATE 
export const setStartDate = (startDate) => ({
    type: "CHANGE_FILTER",
    updates: { startDate: startDate }
});
// SET_END_DATE
export const setEndDate = (endDate) => ({
    type: "CHANGE_FILTER",
    updates: { endDate: endDate }
});


// SORT_BY_DATE
export const sortByDate = () => ({
    type: "CHANGE_FILTER",
    updates: { sortBy: 'date' }
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: "CHANGE_FILTER",
    updates: { sortBy: 'amount' }
});
