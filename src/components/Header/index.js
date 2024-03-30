import { Outlet, Link, useLoaderData, useNavigate} from "react-router-dom";
import style from "./style.module.scss";
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Container from "../Container";


// const MENU = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(`/`);
  }

  return (
    <>
      <header className={style.root}>
        <Container>
          <div className={style.headerWrap}>
            <div className={style.logo} onClick={handleLogoClick}>
              <Logo />
            </div>
            <ul className={style.nav}>
            <li><Link to={`/`}>Main</Link></li>
            <li><Link to={`/characters`}>Characters</Link></li>
            <li><Link to={`/about`}>About Game</Link></li>
            <li><Link to={`/contacts`}>Contacts</Link></li>

              {/* {MENU.map((item) => (
                <li>
                  <a href="#">{item}</a>
                </li> */}
              {/* ))} */}
            </ul>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
