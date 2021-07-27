import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
    }

    function showEditingHandler() {
        setIsEditing(true);
    }

    function disableEditingHandler() {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={showEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={disableEditingHandler} />}
        </div>
    );
}

export default NewExpense;