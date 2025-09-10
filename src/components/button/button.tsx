import React, { ButtonHTMLAttributes, FC } from "react";
import classnames from "classnames";

export type ButtonProps = {
  className?: string;
  disabled?: boolean;
  size?: "mini" | "small" | "middle" | "large";
  color?: "default" | "primary" | "success" | "warning" | "danger";
  fill?: "solid" | "outline" | "none";
  block?: boolean;
  loading?: boolean;
  shape?: "default" | "rounded" | "rectangular";
} & ButtonHTMLAttributes<HTMLElement>;

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    size = "middle",
    color = "default",
    fill = "solid",
    block,
    loading,
    shape = "default",
    children,
    disabled,
    ...rest
  } = props;
  const classes = classnames(className, "cms-button", {
    [`cms-button__${color}`]: color,
    [`is-${size}`]: size,
    [`is-fill-${fill}`]: fill,
    [`is-shape-${shape}`]: shape,
    "is-block": block,
    "is-disabled": props.disabled || loading,
    "is-loading": loading,
  });

  return (
    <button className={classes} {...rest} disabled={disabled || loading}>
      {loading ? <span className="cms-icon">&#xe644;</span> : null}
      {children}
    </button>
  );
};

export default Button;
