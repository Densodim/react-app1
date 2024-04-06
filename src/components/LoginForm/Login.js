import Footer from "../Footer";
import style from "./Login.module.scss";
import Logo from "./assets/logo.png";
import { ReactComponent as Icon } from "./assets/icon-pen.svg";
import cn from "classnames";
import ButtonForm from "./ButtonForm/ButtonForm";
import InputForm from "./InputForm/InputForm";
import { useEffect, useMemo, useState } from "react";
import Form from "./Form/Form";
import { useAuth } from "../../contex/authContex";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [toggleEl, setToggleEl] = useState(false); // toggle
  const [buttonFadeInUpEl, setButtonFadeInUpEl] = useState(true); // button
  const auth = useAuth(); // get auth context
  const navigate = useNavigate(); // get navigate
  const lacation = useLocation(); // get location

  const fromBack = useMemo(() => {
    if(lacation.state?.from) {
      return lacation.state?.from // redirect
    }
    return "/"; 
  }, [lacation]) // redirect

  useEffect(() => {
    if(auth.user !== null) {
      navigate(fromBack); // redirect
    }
  }, [])

  const handleToogleClick = () => {
    setToggleEl((preState) => !preState); // toggle
  };


  const buttonFadeInUp = () => {
    setButtonFadeInUpEl((preState) => !preState); // button
  };


  const handleLoginSubmit = (e) => {
    auth.login(e, () => {
      
      console.log("Login successfully");
      navigate(fromBack); // redirect
    }); // login
  };

  return (
    <>
      <div className={style.headerLogo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={cn(style.container, { [style.active]: toggleEl })}>
        <div className={style.card} />
        <div className={style.card}>
          <h1 className={style.title}>Login</h1>
          <Form onSubmit={handleLoginSubmit}>
            <InputForm type="email" required="required" name="email">
              Email
            </InputForm>

            <InputForm type="password" required="required" name="password">
              Password
            </InputForm>

            <ButtonForm> Go </ButtonForm>
          </Form>
        </div>
        <div className={cn(style.card, style.alt)}>
          <div
            className={cn(style.toggle, { [style.active]: toggleEl })}
            onClick={handleToogleClick}
          >
            <div onClick={buttonFadeInUp}>
              <Icon />
            </div>
          </div>
          <h1 className={style.title}>
            Register
            <div className={style.close} onClick={() => setToggleEl(false)} />
          </h1>
          <Form onSubmit={(val) => console.log(val)}>
            <div className={cn({ [style.buttonFadeInUp]: buttonFadeInUpEl })}>
              <InputForm type="email" required="required" name="email">
                Email
              </InputForm>

              <InputForm type="password" required="required" name="password">
                Password
              </InputForm>

              <InputForm
                type="password"
                required="required"
                name="passwordReapet"
              >
                Repeat Password
              </InputForm>
              <ButtonForm>Register</ButtonForm>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
