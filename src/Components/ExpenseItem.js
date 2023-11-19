import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div>
      <div className="expense-item">May 30 2012</div>
      <div>
        <h2 className="expense-item__description">Car Insurence</h2>
        <div className="expense-item__price">$294</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
