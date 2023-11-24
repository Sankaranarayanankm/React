import React, { useState } from "react";
import "./Form.css";
import ErrorModel from "../UI/ErrorModel";

const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error,setError]=useState();

  const nameChangeHandler = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const ageChangeHandler = (event) => {
    const { value } = event.target;
    setAge(value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (name.trim().length == 0 || age.trim().length == 0){
      setError({
        title:"Invalid name",
        message:"Please enter a valid name"
      })
      return;
    }
    if (age < 1){
      setError({
        title:"Invalid Age",
        body:"Age cannot be less than ONE!!"
      })
      return;
    }
    props.userAdd({ name, age });
    setName("");
    setAge("");
  };
  const errorHandler=()=>{
    setError(null);
  }
  return (
    <div onClick={errorHandler}>
      
     {error &&  <ErrorModel onClick={errorHandler} title={error.title} message={error.message} />}
      <div className="form-div" >
        <form className="form" onSubmit={submitHandler}>
          <label className="form__label" htmlFor="name">
            Username
          </label>
          <br />
          <input
            className="form__input"
            type="text"
            id="name"
            value={name}
            onChange={nameChangeHandler}
          />
          <br />
          <label className="form__label" htmlFor="age">
            Age(Years){" "}
          </label>
          <br />
          <input
            className="form__input"
            type="number"
            id="age"
            value={age}
            onChange={ageChangeHandler}
          />
          <br />
          <button className="form__button">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
