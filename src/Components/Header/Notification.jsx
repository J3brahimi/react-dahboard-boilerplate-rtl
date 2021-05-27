import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  iconWrapper: {
    padding: 9,
    border: `1px solid ${theme.color.LightenGrayishBlue}`,
    borderRadius: 15,
    marginLeft: 30,
    "& .badge": {
      background: theme.palette.primary.main,
      color: "white",
      padding: "1px 6px",
      borderRadius: 7,
      fontWeight: 700,
      fontSize: 14,
      position: "absolute",
      top: -8,
      right: -8,
    },
  },
}));

function Notification(props) {
  const classes = useStyles();
  return (
    <div className={classes.iconWrapper}>
      <div className="icon icon-bell" />
      <span className="badge">8</span>
    </div>
  );
}

export default Notification;
