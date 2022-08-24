import React, { useState, useContext } from "react";
import { makeStyles, Box, Typography, Badge, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../Login/LoginDialog";
import { LoginContext } from "../../context/ContextProvider";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import PersonIcon from "@mui/icons-material/Person";
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FaDownload, FaGooglePlay } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  wrapper: {
    margin: "0 0% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 26,
      textDecoration: "none",
      color: "#FFFFFF",
      fontSize: 12,
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        color: "#2874f0",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginTop: 10,
      },
      "@media (max-width: 1055px )": {
        marginRight: 16,
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  login: {
    color: "#2874f0",
    background: "#dddddd",
    textTransform: "none",
    fontWeight: 600,
    padding: "5px 10px",
    height: 35,
    border: 1,
    borderRadius: 4,
    boxShadow: "none",
    marginLeft: 10,
    [theme.breakpoints.down("sm")]: {
      background: "#2874f0",
      color: "#dddddd",
    },
  },
}));

const CustomButtons = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);

  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Box className={classes.wrapper}>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Link>
          <Button
            className={classes.login}
            variant="contained"
            onClick={() => openDialog()}
          >
            Login
          </Button>
        </Link>
      )}
      <Link to="/seller" className={classes.container}>
        <Typography style={{ marginLeft: 10, color: "black" }}>
          Become Seller
        </Typography>
      </Link>
      <Link to="/Appsoon" className={classes.container}>
        <FaGooglePlay style={{ height: 20, width: 20, color: "black" }} />
        <Typography style={{ marginLeft: 5, color: "black" }}>App</Typography>
      </Link>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={cartItems?.length} style={{ color: "black" }}>
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: 5, color: "black" }}>Cart</Typography>
      </Link>
      <Link to="/staffprofile" className={classes.container}>
        <Badge badgeContent={cartItems?.length} style={{ color: "black" }}>
          <PersonIcon />
        </Badge>
        <Typography style={{ marginLeft: 5, color: "black" }}>User</Typography>
      </Link>
      <Link to="/" className={classes.container}>
        <Badge badgeContent={cartItems?.length} style={{ color: "black" }}>
        <FavoriteIcon/>
        </Badge>
        <Typography style={{ marginLeft: 5, color: "black" }}></Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  );
};

export default CustomButtons;
