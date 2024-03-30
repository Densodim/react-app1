import style from "./Style.module.scss";
import PropTypes from "prop-types";
import cn from "classnames";

const Container = ({ children, className }) => {
  
  return (
    <>
      <div className={cn(style.root, className)}>{children}</div>
    </>
  );
};

Container.PropTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;
