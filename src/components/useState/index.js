import { useState } from "react";
import style from "./index.module.scss";

const Counter = () => {
    const [count, setCount] = useState(0); // 0

    const handleMinusClick = () => {
        setCount(prevState => prevState - 1); // prevState - 1
    }
    const handlePlusClick = () => {
        setCount(prevState => prevState + 1); // prevState + 1
    }
  return (
    <>
      <div className={style.root}>
        <div>{count}</div>
        <button className={style.button} onClick={handlePlusClick}>+</button>
        <button className={style.button} onClick={handleMinusClick}>-</button> 
      </div>
    </>
  );
};

export default Counter;