import { Box, makeStyles, Typography, Button, Grid } from "@material-ui/core";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import { loadRazorpay } from "../../razorpay/loadPayment";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const useStyle = makeStyles((theme) => ({
  component: {
    // marginTop: 55,
    padding: "30px 135px",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 0",
    },
  },
  leftComponent: {
    // width: '67%',
    paddingRight: 15,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 15,
    },
  },
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  bottom: {
    padding: "16px 22px",
    background: "#fff",
    boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
    borderTop: "1px solid #f0f0f0",
  },
  placeOrder: {
    display: "flex",
    marginLeft: "auto",
    background: "#fb641b",
    color: "#fff",
    borderRadius: 2,
    width: 250,
    height: 51,
  },
}));

export default function Cart() {
  const classes = useStyle();

  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;
  const { slug } = useParams();

  // getting data
  const [product, setProduct] = useState([]);
  async function GetData(slug) {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/products/slug/${slug}`
    );
    console.log(res.data);
    setProduct(res.data);
    console.log(res.data);
  }
  useEffect(() => {
    GetData();
  }, []);

  //   const removeItemFromCart = (_id) => {
  //     dispatch(removeFromCart(_id));
  //   };

  const buyNow = async () => {
    
  };

  return (
    <>
      {cartItems.length ? (
        <Grid container className={classes.component}>
          <Grid
            item
            lg={9}
            md={9}
            sm={12}
            xs={12}
            className={classes.leftComponent}
          >
            <Box className={classes.header}>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({cartItems?.length})
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <Box className={classes.bottom}>
              <Button
                onClick={() => buyNow()}
                variant="contained"
                className={classes.placeOrder}
              >
                Place Order
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
