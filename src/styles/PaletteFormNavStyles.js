import sizes from "./sizes";
// import { DRAWER_WIDTH } from "../constants";
// const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px"
  },
  appBarShift: {
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: drawerWidth,
    width: "calc(100% - 400px)",
    marginLeft: "400px",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  navTitle: {
    [sizes.down("xs")]: {
      fontSize: "1rem"
    }
  },
  menuButton: {
    marginLeft: "12px",
    marginRight: "20px",
    [sizes.down("xs")]: {
      padding: "6px",
      marginLeft: "6px",
      marginRight: "6px"
    }
  },
  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none"
    },
    [sizes.down("xs")]: {
      marginRight: "0.5rem"
    }
  },
  button: {
    minWidth: "auto",
    margin: "0 0.5rem",
    [sizes.down("xs")]: {
      fontSize: "0.75rem",
      margin: "0.3rem",
      padding: "0.3rem"
    }
  }
});

export default styles;
