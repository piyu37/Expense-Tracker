import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('all');

    function showExpensesByFilteredValue(filteredValue) {
        setFilteredYear(filteredValue);
    }

    let filteredByYearList = [];

    if (filteredYear === 'all') {
        filteredByYearList = props.expenses;
    } else {
        filteredByYearList = props.expenses.filter(
            expense => expense.date.getFullYear().toString() === filteredYear);
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilteredValue={showExpensesByFilteredValue} />
                <ExpensesChart
                    expenses={filteredByYearList}
                    filteredYear={filteredYear} />
                <ExpensesList filteredByYearList={filteredByYearList} />
            </Card>
        </div>
    );
}

export default Expenses;