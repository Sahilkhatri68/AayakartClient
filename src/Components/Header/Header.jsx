import {
  AppBar,
  Toolbar,
  makeStyles,
  Box,
  Typography,
  withStyles,
  IconButton,
  Drawer,
  List,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import CustomButtons from "./CustomButtons";
import Search from "./Search";
import { Menu } from "@material-ui/icons";
import { useState } from "react";
import logoURL from "../images/AayakartLogo.png";
const useStyle = makeStyles((theme) => ({
  header: {
    background: "#FFFFFF",
    height: 55,
  },
  component: {
    marginLeft: "12%",
    lineHeight: 0,
    color: "#FFFFFF",
    textDecoration: "none",
    textDecoration: "none",
    "@media (max-width: 1265px)": {
      marginLeft: "3%",
    },
  },
  logo: {
    width: 140,
    height: 57,
  },
  container: {
    display: "flex",
  },
  subHeading: {
    fontSize: 10,
    fontStyle: "italic",
  },
  subURL: {
    width: 10,
    height: 10,
    marginLeft: 4,
  },
  list: {
    width: 250,
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  customButtons: {
    margin: "0 0 0 auto",
    width: 800,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);

const Header = () => {
  const classes = useStyle();

  //   const subURL =
  //     "/";

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const list = () => (
    <Box className={classes.list} onClick={handleClose}>
      <List>
        <listItem button>
          <CustomButtons />
        </listItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" className={classes.header}>
      <ToolBar>
        <IconButton
          color="black"
          className={classes.menuButton}
          onClick={handleOpen}
        >
          <Menu />
        </IconButton>

        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>

        <Link to="/" className={classes.component}>
          <img src={logoURL} className={classes.logo} alt="" />
        </Link>
        <Search />
        <span className={classes.customButtons}>
          <CustomButtons />
        </span>
      </ToolBar>
    </AppBar>
  );
};

export default Header;
