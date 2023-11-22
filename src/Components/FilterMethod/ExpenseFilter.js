import React, { useState } from 'react'
import Card from '../UI/Card';


const ExpenseFilter = (props) => {
  const [selectedValue,setSelectedValue]=useState("");

  function dropDownHandler(event){
    const {value}=event.target;
    setSelectedValue(value);
    props.onFilter(value);
  }
  return (
    <Card>
      <label htmlFor='dropdown'>Select an option: </label>
      <select id='dropdown' value={selectedValue} onChange={dropDownHandler}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </Card>
  )
}

export default ExpenseFilter