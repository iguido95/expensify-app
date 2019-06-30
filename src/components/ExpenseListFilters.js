import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../redux/actions/filters';

const ExpenseListFilters = ({ filters, dispatch }) => (
    <div>
        <input type="text" value={filters.text} onChange={(event) => {
            dispatch(setTextFilter(event.target.value));
        }} />
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);