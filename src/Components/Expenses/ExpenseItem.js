import React from "react";
import "../Expenses/ExpenseItem.css"
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem=(props)=> {
 function clickHandler(id){
  console.log(id);
  const expItem=document.getElementById(`expense-${id}`);
  // console.log(expItem)
  if(expItem) expItem.remove();
 }
  return (
    <div className="expense-item" id={`expense-${props.id}`}>
      <ExpenseDate date={props.date}/>
      <ExpenseDetails  title={props.title} amount={props.amount}/>
      <div>{props.loc}</div>
      <button onClick={()=>clickHandler(props.id)}>Delete</button>
    </div>
  );
}
export default ExpenseItem;
