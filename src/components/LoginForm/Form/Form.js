import style from "./Form.module.scss";
import { children, useEffect, useState } from "react";

const Form = ({ children, onChange, onSubmit }) => {
  const [value, setValue] = useState({});
  useEffect(() => {
    onChange && onChange(value); // call onChange
  }, [value]);
  const handleChange = (event) => {
    setValue((preState) => ({
      ...preState, // copy previous state
      [event.target.name]: event.target.value, // add new value
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // stop page refresh
    onSubmit && onSubmit(value); // call onSubmit
  }

  return (
    <>
      <form 
      className={style.root} 
      onChange={handleChange}
      onSubmit={handleSubmit}>
        {children}
      </form>
    </>
  );
};

export default Form;
