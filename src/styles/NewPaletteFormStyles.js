// import { DRAWER_WIDTH } from "../constants";
// const drawerWidth = DRAWER_WIDTH;
import sizes from "./sizes";

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    // width: drawerWidth,
    width: "400px",
    flexShrink: 0,
    [sizes.down("xs")]: {
      width: "100%"
    }
  },
  drawerPaper: {
    // width: drawerWidth,
    width: "400px",
    display: "flex",
    alignItems: "center",
    [sizes.down("xs")]: {
      width: "100%"
    }
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  drawerTitle: {
    fontSize: "2rem"
  },
  content: {
    outline: "1px solid red",
    height: "calc(100vh - 64px)",
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    // marginLeft: -drawerWidth
    marginLeft: "-400px",
    [sizes.down("xs")]: {
      marginLeft: "-100%"
    }
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0,
    [sizes.down("xs")]: {
      overflow: "hidden"
    }
  },
  container: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  buttons: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around"
  },
  button: {
    // width: "50%"
  }
});

export default styles;
