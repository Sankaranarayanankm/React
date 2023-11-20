import React, { useState } from 'react'

const ExpenseForm = () => {
  const [state,setState]=useState({
    title:"",
    amount:""
  })
  function changeHandler(event){
    const {name,value}=event.target;
    setState((old)=>{
      return {
        ...old,
        [name]:value
      }
    })
  }
  console.log("title: "+state.title, "amount:"+ state.amount)
  return (
    <form>
      <input 
        type='text'
        name='title'
        value={state.title}
        onChange={changeHandler}
      />
       <input 
        type='text'
        name='amount'
        value={state.amount}
        onChange={changeHandler}
      />
    </form>
  )
}

export default ExpenseForm;