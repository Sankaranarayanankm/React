import ExpenseItem from "./Components/Expenses/ExpenseItem";
import Card from "./Components/UI/Card";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";

const App=()=> {
  const [expense,setExpense]=useState([]);
 
  const addExpenseHandler=(expense)=>{
    // console.log(expense);
    setExpense(old=>{
      return [expense,...old];
    });
    
  }
  const expenseItems=expense.map(value=>{
    console.log(value);
    return (<ExpenseItem
      key={value.id}
      title={value.title}
      amount={value.amount}
      date={value.date}
    />)
  })
    
  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler} />
     {expenseItems}
    </div>
    
  );
}

export default App;
