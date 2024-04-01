import Container from "../Container";
import Footer from "../Footer";
import Header from "../Header";
import style from "./Layout.module.scss";
import { Outlet, Link, useMatch } from "react-router-dom";
import PropPypes from "prop-types";

const Layout = () => {
  const math = useMatch("/");
  // console.log(math);
  return (
    <>
      <Header />
      {math !== null ? (
        <Outlet />
      ) : (
        <div className={style.conteiner}>
          <Container>
            <Outlet />
          </Container>
        </div>
      )}
      <Footer />
    </>
  );
};



export default Layout;
