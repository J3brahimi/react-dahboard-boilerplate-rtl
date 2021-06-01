import { useState } from "react";

import { NavLink } from "react-router-dom";

import { activeRoute } from "Utils/helperFunction";

import {
  ListItem,
  List,
  ListItemText,
  makeStyles,
  useMediaQuery,
  useTheme,
  Collapse,
  Divider,
} from "@material-ui/core";
import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";

import menuItemStyle from "Assets/jss/menuItem.style";
import AppMenuItemComponent from "./AppMenuItemComponent";
const useStyles = makeStyles(menuItemStyle);

export default function MenuItem({ handleDrawerToggle, ...item }) {
  const classes = useStyles(menuItemStyle);

  const isExpandable = item.routes?.length > 0;
  const isActive = activeRoute(item.path);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const MenuItemExpandable = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {item.routes.map((item, index) => (
          <MenuItem
            {...item}
            key={index}
            handleDrawerToggle={handleDrawerToggle}
          />
        ))}
      </List>
    </Collapse>
  ) : null;

  const MenuItemRoot = (
    <AppMenuItemComponent
      className={`${classes.itemLink} ${
        isActive ? classes.itemLinkActive : ""
      }`}
      NavLinkClass={classes.item}
      path={item.layout + item.path}
      onClick={handleClick}
      withSubRoute={item.routes?.length > 0}
    >
      {item.icon}
      <ListItemText
        primary={item.name}
        className={`${classes.itemText} ${
          isActive ? classes.itemTextActive : ""
        }`}
        disableTypography={true}
      />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </AppMenuItemComponent>
  );

  return (
    <>
      {MenuItemRoot}
      {MenuItemExpandable}
    </>
  );
}
