import React from 'react'
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandeler=(enterdExpenseData)=>{
    const expenseData={
      ...enterdExpenseData,
      id:Math.random().toString()
    }
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    }
  
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandeler} />
    </div>
  )
}

export default NewExpense