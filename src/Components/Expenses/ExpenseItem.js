import React, { useState } from "react";
import "../Expenses/ExpenseItem.css"
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem=(props)=> {
  const [title,setTitle]=useState(props.title);
  const [amount,setAmount]=useState(props.amount);

  function changeHandler(){
    setAmount("100")
  }
   
  function clickHandler(){
    setTitle("updated!");
  }

  return (
    <div className="expense-item" id={`expense-${props.id}`}>
      <ExpenseDate date={props.date}/>
      <ExpenseDetails  title={title} amount={amount}/>
      <button onClick={changeHandler}>Change Expense</button>
      <div>{props.loc}</div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}
export default ExpenseItem;
