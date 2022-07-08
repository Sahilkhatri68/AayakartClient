import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Box,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { authenticateLogin, authenticateSignup } from "../../service/api";
import axios from "axios";

const useStyle = makeStyles({
  component: {
    height: "70vh",

    maxWidth: "unset !important",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    background: "#2874f0",
    backgroundPosition: "center 85%",
    backgroundRepeat: "no-repeat",
    height: "70vh",
    width: "40%",
    padding: "45px 35px",
    "& > *": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
    "@media(max-width:650px)": {
      display: "none",
    },
  },
  login: {
    padding: "25px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: 20,
    },
  },
  loginbtn: {
    textTransform: "none",
    background: "#FB641B",
    color: "#fff",
    height: 48,
    borderRadius: 2,
  },
  requestbtn: {
    textTransform: "none",
    background: "#fff",
    color: "#2874f0",
    height: 48,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  createText: {
    margin: "auto 0 5px 0",
    textAlign: "center",
    color: "#2874f0",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
  },
  error: {
    fontSize: 10,
    color: "#ff6161",
    lineHeight: 0,
    marginTop: 10,
    fontWeight: 600,
  },
});

const loginInitialValues = {
  username: "",
  password: "",
};

const signupInitialValues = {
  firstname: "",
  username: "",
  email: "",
  password: "",
  confirmpassword: "",
  phone: "",
};

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

const LoginDialog = ({ open, setOpen, setAccount }) => {
  const classes = useStyle();
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, showError] = useState(false);
  const [account, toggleAccount] = useState(accountInitialValues.login);

  useEffect(() => {
    showError(false);
  }, [login]);

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (!response) showError(true);
    else {
      showError(false);
      handleClose();
      setAccount(response.data.username);
    }
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.username);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const [fullname, setFullname] = useState("");
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [phone_number, setphone_number] = useState("");

  const postdata = () => {
    axios
      .post("https://web.chatvait.com/api/register", {
        fname: fullname,
        username: username,
        phone: phone_number,
        password: password,
        confirmPassword: password,
        email: email,
      })
      .then(() => {
        alert("data posted");
      });
  };
  const UserLogin = () => {
    axios
      .post("https://web.chatvait.com/api/login", {
        username: username,
        password: password,
      })

      .then(() => {
        alert("Successfuly loged in ");
      })
      .catch((e) => {
        alert("invalid details");
      });
  };
  const requestOTP = () => {
    alert("Check your phone");
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Box>
          {account.view === "login" ? (
            <Box className={classes.login}>
              <TextField
                onChange={(e) => setusername(e.target.value)}
                name={username}
                label="Enter Username"
              />
              {error && (
                <Typography className={classes.error}>
                  Please enter valid Username
                </Typography>
              )}
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                name={password}
                label="Enter Password"
              />
              <Typography className={classes.text}>
                By continuing, you agree to Aayakart's Terms of Use and Privacy
                Policy.
              </Typography>
              <Button className={classes.loginbtn} onClick={() => UserLogin()}>
                Login
              </Button>
              <Typography
                className={classes.text}
                style={{ textAlign: "center" }}
              >
                OR
              </Typography>
              <Button
                className={classes.requestbtn}
                onClick={() => requestOTP()}
              >
                Request OTP
              </Button>
              <Typography
                className={classes.createText}
                onClick={() => toggleSignup()}
              >
                New to Aayakart? Create an account
              </Typography>
            </Box>
          ) : (
            <Box className={classes.login}>
              <TextField
                onChange={(e) => setFullname(e.target.value)}
                name={fullname}
                label="Enter Firstname"
              />
              <TextField
                onChange={(e) => setusername(e.target.value)}
                name={username}
                label="Enter Username"
              />
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                name={email}
                label="Enter Email"
              />
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                name={password}
                label="Enter password"
              />
              <TextField
                onChange={(e) => setconfirmpassword(e.target.value)}
                name={confirmpassword}
                label="Re-Enter Password"
              />
              <TextField
                onChange={(e) => setphone_number(e.target.value)}
                name={phone_number}
                label="Enter Phone_no"
              />
              <Button className={classes.loginbtn} onClick={() => postdata()}>
                Continue
              </Button>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
