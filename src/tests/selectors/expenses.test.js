import getVisibleExpenses from '../../redux/selectors/expenses';
import moment from 'moment';

const expenses = [
    {
        id: '1',
        description: "Gum",
        note: '',
        amount: 195,
        createdAt: 0
    }, {
        id: '2',
        description: "Rent a",
        note: '',
        amount: 50000,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }, {
        id: '3',
        description: "Gas",
        note: 'euro 95',
        amount: 6000,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];

test('should filter by text value', () => {
    const filters = {
        text: 'a',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by startDate', () => {
    const filters= {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});