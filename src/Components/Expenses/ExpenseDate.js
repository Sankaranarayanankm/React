import React from "react";
import '../Expenses/ExpenseDate.css';  

const ExpenseDate=(props)=> {
  const date=new Date(props.date);
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.toLocaleString("en-US",{year:"numeric"})
  // console.log(month,day,year);
  return (
    <div className="expense-date" >
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
