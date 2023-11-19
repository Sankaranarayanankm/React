import React from 'react'
import "./ExpenseDetails.css";

function ExpenseDetails(props) {
  return (
    <div>
      <h2 className="expense-details__description">{props.title}</h2>
      <div className="expense-details__price">${props.amount}</div>
    </div>
  )
}

export default ExpenseDetails;