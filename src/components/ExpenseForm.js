import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const now = moment().locale('nl');
console.log(now.format('D MMMM YYYY'));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt).locale('nl') : moment().locale('nl'),
            dateFocused: false,
            error: undefined
        };
    }

    onDescriptionChange = (event) => {
        const description = event.target.value;
        this.setState(() => ({ description }));
    }

    onNoteChange = (event) => {
        const note = event.target.value;
        this.setState(() => ({ note: note }));
    };

    onAmountChange = (event) => {
        let amount = event.target.value;
        const regex = /^\d{1,}(\.\d{0,2})?$/;
        if (!amount || amount.match(regex)) {
            this.setState(() => ({ amount: amount }));
        }
    };


    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onDateFocusChange = ({ focused }) => {
        this.setState(() => ({ dateFocused: focused }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount){
            this.setState(() => ({ error: 'Please provide a description and an amount' }));
        } else {
            this.setState(() => ({ error: undefined }));
            const new_expense = {
                description: this.state.description.trim(),
                amount: parseFloat(this.state.amount),
                note: this.state.note.trim(),
                createdAt: this.state.createdAt.valueOf()
            };

            this.props.onSubmit(new_expense);
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    { this.state.error && <b style={{color: 'red'}}>{ this.state.error }</b>}<br/>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        inputMode="decimal"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.dateFocused}
                        onFocusChange={this.onDateFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                    />
                    <textarea 
                        placeholder="Note"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button type="submit">Add Expense</button>
                </form>
            </div>
        );
    }
}