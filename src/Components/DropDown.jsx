import React from "react";
import { Dropdown } from "antd";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  dropdownWrapper: {
    padding: "9px 13px",
    // lineHeight: 0,
    background: "#f3f3f3",
    borderRadius: 8,
    width: 30,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
}));
function DropDown({ menu, icon }) {
  const classes = useStyles();
  return (
    <Dropdown
      overlay={menu}
      className={`${classes.dropdownWrapper} cursor-pointer`}
      trigger={["click"]}
      placement="bottomRight"
    >
      <div className=" flex-center" onClick={e => e.preventDefault()}>
        {icon}
      </div>
    </Dropdown>
  );
}

export default DropDown;
