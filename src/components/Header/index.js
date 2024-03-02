import style from "./style.module.css";
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Container from "../Container";

const MENU = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

const Header = () => {
  return (
    <>
      <header className={style.root}>
        <Container>
          <div className={style.headerWrap}>
            <div className={style.logo}>
              <Logo />
            </div>
            <ul className={style.nav}>
              {MENU.map((item) => (
                <li>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
