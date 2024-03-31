import React from "react";
import Container from "../Container";
import style from "./Style.module.scss";
import cn from "classnames";
import PropType from "prop-types";

const Text = ({
  children,
  level,
  element,
  className,
  strong,
  italic,
  disabled,
  backline,
  id,
}) => {
  const el = `h${level}`;
  return React.createElement(
    el,
    {
      id,
      className: cn(style.root, className, {
        [style.strong]: strong,
        [style.italic]: italic,
        [style.disabled]: disabled,
        [style.backline]: backline,
      }),
    },
    children
  );
};

Text.defoultProps = {
  level: 1,
  disabled: true,
};

Text.propTypes = {
  children: PropType.node,
  id:PropType.string,
  level: PropType.oneOf([1, 2, 3, 4, 5]).isRequired,
  className: PropType.string,
  strong: PropType.bool,
  italic: PropType.bool,
  disabled: PropType.bool,
  backline: PropType.bool,
};

export default Text;
