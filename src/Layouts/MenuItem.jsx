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
} from "@material-ui/core";
import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";

import menuItemStyle from "Assets/jss/menuItem.style";
const useStyles = makeStyles(menuItemStyle);

export default function MenuItem({
  name,
  path,
  icon,
  layout,
  items = [],
  handleDrawerToggle,
}) {
  const classes = useStyles(menuItemStyle);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const isExpandable = items && items.length > 0;
  const isActive = activeRoute(path);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem
        button
        className={`${classes.itemLink} ${
          isActive ? classes.itemLinkActive : ""
        }`}
        onClick={() => (matches ? handleDrawerToggle() : null)}
      >
        <NavLink
          to={layout + path}
          className={classes.item}
          activeClassName="active"
        >
          {icon}
          <ListItemText
            primary={name}
            className={`${classes.itemText} ${
              isActive ? classes.itemTextActive : ""
            }`}
            disableTypography={true}
          />
        </NavLink>
        {/* Display the expand menu if the item has children */}
        {isExpandable && !open && (
          <IconExpandMore onClick={() => handleClick()} />
        )}
        {isExpandable && open && (
          <IconExpandLess onClick={() => handleClick()} />
        )}
      </ListItem>
      {isExpandable ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {items.map((item, index) => (
              <MenuItem {...item} key={index} />
            ))}
          </List>
        </Collapse>
      ) : null}
    </>
  );
}
