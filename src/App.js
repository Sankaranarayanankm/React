import ExpenseItem from "./Components/Expenses/ExpenseItem";
import Card from "./Components/UI/Card";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";
import ExpenseFilter from "./Components/FilterMethod/ExpenseFilter";
import ExpensesChart from "./Components/Expenses/ExpensesChart";
const dummyExpense = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 4000,
    date: new Date(2021, 4, 23),
    locationOfExpenditure: "idukki",
  },
  {
    id: "e2",
    title: "Laptop",
    amount: 400,
    date: new Date(2022, 6, 23),
    locationOfExpenditure: "Eranakulam",
  },
  {
    id: "e3",
    title: "Bike Insurance",
    amount: 3850,
    date: new Date(2019, 9, 23),
    locationOfExpenditure: "Palakkad",
  },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 4000,
    date: new Date(2022, 0, 21),
    locationOfExpenditure: "Kollam",
  },
];

const App = () => {
  const [expense, setExpense] = useState(dummyExpense);
  const [filteredExpense, setFilteredExpense] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpense((old) => {
      return [expense, ...old];
    });
  };

  function addFilterHandler(selectedYear) {
    const filteredItems = expense.filter((value) => {
      const year = new Date(value.date).getFullYear();
      return year.toString() === selectedYear;
    });

    setFilteredExpense(filteredItems);
  }
  return (
    <div>
      <NewExpense   onAddExpense={addExpenseHandler} />
      <ExpensesChart expense={expense}/>

      <ExpenseFilter items={expense} onFilter={addFilterHandler} />
      {filteredExpense.length > 0
        ? filteredExpense.map((value) => (
            <ExpenseItem
              key={value.id}
              title={value.title}
              amount={value.amount}
              date={value.date}
            />
          ))
        : expense.map((value) => (
            <ExpenseItem
              key={value.id}
              title={value.title}
              amount={value.amount}
              date={value.date}
            />
          ))}
          {expense.length==1 && <p>Only single expense addd more</p>}
    </div>
  );
};

export default App;
