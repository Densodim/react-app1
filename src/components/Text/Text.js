import React from "react";
import Container from "../Container";
import style from "./Style.module.css";
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
}) => {
  const el = `h${level}`;
  return React.createElement(
    el,
    {
      className: cn(style.root, className, {
        [style.strong]: strong,
        [style.italic]: italic,
        [style.disabled]: disabled,
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
  level: PropType.oneOf([1, 2, 3, 4]).isRequired,
  className: PropType.string,
  strong: PropType.bool,
  italic: PropType.bool,
  disabled: PropType.bool,
};

export default Text;
