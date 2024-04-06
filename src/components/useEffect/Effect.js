import { useEffect, useRef, useState } from "react";
import style from "./Effect.module.scss";



const Effect = () => {
  const ref = useRef(null);
  const popRef = useRef(null);
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  console.log("pop", popRef);

  useEffect(() => {
    console.log("effect");
  }, [count]);

  useEffect(() => {
    if (!isVisible) return;
    {
       const {bottom} = ref.current.getBoundingClientRect(); 

       const time =popRef.current.style.top = `${bottom + 100}px`;
       console.log("time", time);
    }
  }, [isVisible]);

  

  const style1 = {
    background: 'black',
    color: 'white',
    top: '150px',
    position: 'relative'
  }

  return (
    <div className={style.button} ref={popRef}>
      <p>{count}</p>
      <div>
        <button ref={ref} onClick={() => setCount((s) => s + 1)}>
          Click
        </button>
        <button onClick={() => setIsVisible((s) => !s)}>Show</button>
        {isVisible && <div className={style.button}>This is block</div>}
      </div>
    </div>
  );
};

export default Effect;
