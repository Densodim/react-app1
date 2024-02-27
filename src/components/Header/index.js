import style from "./style.module.css";
import { ReactComponent as Logo } from '../../assets/logo.svg';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
  return (
    <>
      <header className={style.root}>
        <div className={style.header}>
          <div className={style.headerWrap}>
            <div className={style.logo}>
              <Logo />
            </div>
            <ul className={style.nav}>
              {MENU.map((item=>
                <li><a href="#">{item}</a></li>
                ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
