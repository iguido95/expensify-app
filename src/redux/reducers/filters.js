import moment from 'moment';

// Filter reducer 
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'amount', // date or amount
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'CHANGE_FILTER':
            return { ...state, ...action.updates };
        default:
            return state;
    }
};

export default filtersReducer;