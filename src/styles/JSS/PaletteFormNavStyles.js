import { DRAWER_WIDTH } from "../../components/helpers/constants";

const drawerWidth = DRAWER_WIDTH;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },

  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none",
    },
    "@media (max-width:575.98px)": {
      marginRight: "5rem",
      display: "flex",
    },
  },

  button: {
    margin: "0 0.5rem",
    "@media (max-width:575.98px)": {
      padding: "0.3rem",
    },
  },
});

export default styles;
