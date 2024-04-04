import { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import Text from "../Text";

const SaveName = ({ onSave }) => {
  const [name, setName] = useState(() => {
    localStorage.getItem("name") ? localStorage.getItem("name") : "";
  });
  const nameRef = useRef(name);
  // console.log('nameRef', nameRef);
  useEffect(() => {
    nameRef.current = name;
  }, [name]);

  useEffect(() => {
    return () => {
      localStorage.setItem("name", nameRef.current); // remove on unmount
    };
  }, []);
  const handleClick = () => {
    onSave && onSave(); // save on click
  };
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button onClick={handleClick}>Save</button>
      </div>
    </>
  );
};

export const ShowName = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((preState) => !preState);
  };

  return (
    <>
      <div>
        <Text level={2}>Save Local Storage</Text>
        <div>
          <button onClick={handleClick}>Show/Hide</button>
        </div>
        {show && <SaveName onSave={handleClick} />}
      </div>
    </>
  );
};

const InitRef = () => {
  const [name, setName] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    repeat: "",
  });
  const refBox = useRef(null);
  const ref = useRef(null);
  const refReset = useRef(null);
  //   console.log("ref", ref);

  const handleChange = (event) => {
    setForm((preState) => ({
      ...preState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = () => {
    // console.log('ref', ref);
    // console.dir(ref.current);
    console.log(refBox.current.offsetWidth);
    refBox.current.style.width = "200px";
    // ref.current.focus();
    ref.current.style.border = "2px solid red";
  };

  const handleInputChange = (event) => {
    //   console.dir( event.target); // {currentTarget: {...}, target: {...}, ...}
    // console.log(event.target.value);
    // setName(event.target.value);
    setForm((preState) => ({
      ...preState,
      [event.target.name]: event.target.value,
    }));
  };

  // const handleFormChange = (event) => {
  //   setForm((preState) => ({
  //     ...preState,
  //     [event.target.name]: event.target.value,
  //   }));
  // };

  //   const handleInputClick = () => {
  //     console.log("form", form);
  //   };

  const handleImputSubmit = (event) => {
    event.preventDefault(); // stop page refresh

    refReset.current.reset(); // reset form

    console.log("form", form);
  };

  const handleFormReset = () => {
    setForm({
      name: "",
      email: "",
      password: "",
      repeat: "",
    });
  };
  return (
    <>
      <div>
        <div>
          <button className={style.button} onClick={handleClick}>
            Change box width
          </button>
        </div>
        <div className={style.root} ref={refBox}>
          <Text level={3}>useRef</Text>
          box
        </div>
        <div>
          <form
            // onChange={handleFormChange} // onChange
            onSubmit={handleImputSubmit} // onSubmit
            ref={refReset}
            onReset={handleFormReset}
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              //   onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              //   onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              //   onChange={handleInputChange}
            />
            <input
              type="passwordRepeat"
              placeholder="PasswordRepeat"
              name="repeat"
              value={form.repeat} //   onChange={handleInputChange}
              onChange={handleChange}
              //   onChange={handleInputChange}
            />
            <button>Get input value</button>
          </form>
        </div>
        <div>{name}</div>
      </div>
    </>
  );
};

export default InitRef;
