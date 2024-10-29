import React, { ReactNode } from "react";
import { Button, ButtonProps } from "react-bootstrap";

export const PfButton: React.FC<ButtonProps> = ({
  children,
  variant,
  ...props
}) => {
  let classes = "";
  switch (variant) {
    case "primary":
      classes =
        classes +
        " border-main-red hover:bg-medium-gray hover:border-lightest-gray";
      break;
    case "secondary":
      classes =
        classes +
        " border-lightest-gray hover:bg-medium-gray hover:border-lightest-gray";
      break;
    default:
      break;
  }
  return (
    <Button className={classes} variant={variant} {...props}>
      {children}
    </Button>
  );
};
