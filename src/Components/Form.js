import React, { useRef, useState } from "react";
import "./Form.css";
import ErrorModel from "../UI/ErrorModel";

const Form = (props) => {
  const collegeRef = useRef();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {

    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
  
    setAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const college=collegeRef.current.value;

    if (name.trim().length == 0 ) {
      setError({
        title: "Invalid name",
        message: "Please enter a valid name",
      });
      return;
    }
    if (age < 1 || age.trim().length == 0) {
      setError({
        title: "Invalid Age",
        message: "Age cannot be less than ONE!!",
      });
      return;
    }
    if(college.length==0){
      setError({
        title: "Invalid College name",
        message: "Fill your college field",
      })
    }
    props.userAdd({ name, age,college });
    setName("");
    setAge("");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div onClick={errorHandler}>
      {error && (
        <ErrorModel
          onClick={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <div className="form-div">
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
          <label className="form__label" htmlFor="college">
            College
          </label>
          <input
            ref={collegeRef}
            className="form__input"
            id="college"
            type="text"
          />
          <br />
          <button className="form__button">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
