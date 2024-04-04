import style from "./InputForm.module.scss";
import { children } from "react";
import cn from "classnames";
import PropsType from "prop-types";

const InputForm = ({ children, name, required, type }) => {
  return (
    <>
      <div className={style.inputContainer}>
        <input type={type} name={name} required={required} />
        <label>{children}</label>
        <div className={style.bar}></div>
      </div>
    </>
  );
};

InputForm.defaultProps = {
  required: false,
  type: "text",
}

InputForm.propTypes = {
  children: PropsType.node,
  name: PropsType.string,
  required: PropsType.string,
  type: PropsType.string,
};

export default InputForm;
