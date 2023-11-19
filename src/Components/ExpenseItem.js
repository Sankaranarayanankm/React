import React from "react";
import "./ExpenseItem.css";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
 
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails  title={props.title} amount={props.amount}/>
      <div>{props.loc}</div>
    </div>
  );
}
export default ExpenseItem;
