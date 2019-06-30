import React from 'react';

export default class ExpenseForm extends React.Component {
    state = {
        description: "",
        amount: "",
        note: ""
    };

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
        const regex = /^\d*(\.\d{0,2})?$/;
        if (amount.match(regex)) {
            this.setState(() => ({ amount: amount }));
        }
    };





    render() {
        return (
            <div>
                <form>
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