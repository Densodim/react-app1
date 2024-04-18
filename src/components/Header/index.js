import {
  Outlet,
  Link,
  useLoaderData,
  useNavigate,
  NavLink,
} from "react-router-dom";
import style from "./style.module.scss";
import PropTypes from "prop-types";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Container from "../Container";
import { useAuth } from "../../contex/authContex";

const MENU = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Main",
    path: "/main",
  },
  {
    title: "Characters",
    path: "/characters",
  },
  {
    title: "About Game",
    path: "/about",
  },
  {
    title: "Contacts",
    path: "/contacts",
  },
  {
    title: "Login",
    path: "/login",
  },
];

const Header = () => {
  const navigate = useNavigate(); // get navigate

  const handleLogoClick = () => {
    navigate(`/`); // redirect
  };

  const auth = useAuth(); // get auth context

  return (
    <>
      <header className={style.root}>
        <Container>
          <div className={style.headerWrap}>
            <div className={style.logo} onClick={handleLogoClick}>
              <Logo />
            </div>
            <ul className={style.nav}>
              {MENU.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => {
                      return isActive ? style.active : null;
                    }}
                  >
                    {item.title}
                  </NavLink>
                  {/* <Link to={item.path}>{item.title}</Link> */}
                </li>
              ))}
              {
                auth.user ? <li><div onClick={() => auth.logout()}>Logout</div></li> : <li><Link to="/login">Login</Link></li>
              }
            </ul>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
