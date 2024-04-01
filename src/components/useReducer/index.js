import { useReducer } from "react";
import style from "./index.module.scss";
import Text from "../Text";

const initState = {
  count: 0,
  name: "John Doe"
};
const reducer = (state, action) => { // {count: 0}
  // console.log("reducer", state, action);
  switch (action.type) {
    case 'MINUS':
      return {
        ...state,
        count: state.count - action.payload // prevState - 1
      }
    case 'PLUS':
      return {
        ...state,
        count: state.count + action.payload // prevState + 1
      }
    case 'RESET':
      return {
        ...state, 
        count: 0,
      }
    default:
      throw new Error();
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log("state", state); 

  const handleMinusClick = () => {
    dispatch({ 
      type: "MINUS",
      payload: 10, 
     }); // {count: 0}
    
  };
  const handlePlusClick = () => {
    dispatch({ 
      type: "PLUS",
      payload: 5,
    });
  };
  const handleResetClick = () => {
    dispatch({ 
      type: "RESET",
    });
  }
  return (
    <>
      <Text level={3}>useReducer</Text>
      <div className={style.root}>
        <div>{state.count}</div>
        <button className={style.button} onClick={handlePlusClick}>
          +
        </button>
        <button className={style.button} onClick={handleMinusClick}>
          -
        </button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </>
  );
};

export default CounterReducer;
