import React from "react";
import "../Expenses/ExpenseItem.css"
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem=(props)=> {
 
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails  title={props.title} amount={props.amount}/>
      <div>{props.loc}</div>
    </Card>
  );
}
export default ExpenseItem;
