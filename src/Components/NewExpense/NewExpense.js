import React, { useState } from 'react'
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEditting,setIsEditting]=useState(false);
  const saveExpenseDataHandeler=(enterdExpenseData)=>{
    const expenseData={
      ...enterdExpenseData,
      id:Math.random().toString()
    }
    props.onAddExpense(expenseData);
    }
    const startEditingHandler=()=>{
      setIsEditting(true);
    }
    const stopEditingHandler=()=>{
      setIsEditting(false);
    }
  return (
    <div className='new-expense'>
     {!isEditting && <button onClick={startEditingHandler}>Add new Expense</button>}
      {isEditting && <ExpenseForm  onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandeler} />}
    </div>
  )
}

export default NewExpense