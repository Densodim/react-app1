import style from "./ButtonForm.module.scss";
import {children} from "react";
import cn from 'classnames';

const ButtonForm = ({children}) => {
    // console.log(style.button);
  return (
    <>
      <div className={style.buttonContainer}>
        <button>
          <span>{children}</span>
          
        </button>
      </div>
    </>
  );
};

export default ButtonForm;
