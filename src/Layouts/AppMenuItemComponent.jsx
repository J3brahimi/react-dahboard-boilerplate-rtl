import React, { forwardRef } from "react";
import ListItem from "@material-ui/core/ListItem";
import { NavLink } from "react-router-dom";

const AppMenuItemComponent = props => {
  const {
    className,
    NavLinkClass,
    onClick,
    path,
    children,
    withSubRoute,
  } = props;

  // If path is not set return the orinary ListItem
  if (withSubRoute) {
    return (
      <ListItem
        button
        className={className}
        children={children}
        onClick={onClick}
      />
    );
  }

  // Return a LitItem with a link component
  return (
    <ListItem
      button
      className={className}
      children={children}
      component={forwardRef((props, ref) => (
        <NavLink
          exact
          {...props}
          innerRef={ref}
          className={NavLinkClass}
          activeClassName="active"
        />
      ))}
      to={path}
    />
  );
};

export default AppMenuItemComponent;
