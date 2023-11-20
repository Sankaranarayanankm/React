import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [state, setState] = useState({
    title: "",
    amount: "",
    date:""
  });
  function changeHandler(event) {
    const { name, value } = event.target;
    setState((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }
  console.log("title: " + state.title, "amount:" + state.amount);
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={state.title}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            value={state.amount}
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            value={state.date}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;


