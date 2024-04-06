import React, { useImperativeHandle, useRef, useState } from "react";
import style from "./UseForwardRef.module.scss";

const Input = React.forwardRef((props, ref) => {
  const [type, setType] = useState("text");
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    changeType: () => {
      setType("password");
    },
    onFocus: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} type={type} />;
});

const UseForwardRef = (props) => {
  const ref = useRef(null);
  return (
    <>
      <div className={style.root}>
        <button onClick={() => ref.current.changeType()}>on Change Type</button>
        <button onClick={() => ref.current.onFocus()}>on Focus</button>
        <Input ref={ref} />
      </div>
    </>
  );
};

export default UseForwardRef;
