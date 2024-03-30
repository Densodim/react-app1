import Container from "../Container";
import Footer from "../Footer";
import Header from "../Header";
import style from "./Layout.module.scss";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className={style.conteiner}>
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
