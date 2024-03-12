import style from "./Button.module.scss";
import Text from "../Text";
import cn from "classnames";

import PropsType from "prop-types";
import { Children } from "react";

const Button = ({ active, title, children, onClick, color }) => {
    const handleClick = () => {
        onClick && onClick();
    };
  // console.log(active);
  return (
    <>
      <button
        className={cn(style.root, {
          [style.active]: active,
        }, style[color])}
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
};

Button.defaultProps = {
    color: "primary",
}

Button.propTypes = {
    color: PropsType.oneOf(["primary", "secondary"]),
  onClick: PropsType.func,
  active: PropsType.bool,
  title: PropsType.string,
  children: PropsType.node,
};

export default Button;
