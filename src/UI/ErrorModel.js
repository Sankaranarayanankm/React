import React from 'react';
import "./ErrorModel.css";

const ErrorModel = (props) => {
  return (
    <div>
      <div className='backdrop'/>
 <div className='modal'>
      <header className='header'>
        <h2>{props.title}</h2>
      </header>
      <div className='content'>
        <p>{props.message}</p>
      </div>
      <footer className='actions'>
        <button className='error-model__button' onClick={props.onClick}>Okey</button>
      </footer>
    </div>
    </div>
   
  )
}

export default ErrorModel;