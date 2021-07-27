import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // [userInput, setUserInput] = userState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value); // or below way
        // setUserInput(
        //     {
        //         ...userInput,
        //         enteredTitle: event.target.value,
        //     }
        // ); or below way but better than above one

        // setUserInput((prevState) => {
        //     return { ...userInput, enteredTitle: event.target.value }
        // });
    }

    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
        // setUserInput(
        //     {
        //         ...userInput,
        //         enteredAmount: event.target.value,
        //     }
        // );
    }

    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
        // setUserInput(
        //     {
        //         ...userInput,
        //         enteredDate: event.target.value,
        //     }
        // );
    }

    function submitHandler(event) {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        props.onCancel();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01'
                        value={enteredAmount}
                        onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date'
                        value={enteredDate}
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
                <button type='button' onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default ExpenseForm;