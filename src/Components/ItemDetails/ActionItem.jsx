import { useState, useContext, useReducer, useEffect } from "react";
import { Button, Box, makeStyles } from "@material-ui/core";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material/";
import clsx from "clsx";
import { useHistory, useParams } from "react-router-dom";
import { LoginContext } from "../../context/ContextProvider";
// import { initialState, reducer } from '../../reducers/reducer';
import { addToCart } from "../../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import { loadRazorpay } from "../../razorpay/loadPayment";
import axios from "axios";
import "./actionItemMultiImg.css";
import Snackbar from "@mui/material/Snackbar";
// import MuiAlert, { AlertProps } from "@mui/material/Alert";
// import * as React from "react";

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

const useStyle = makeStyles((theme) => ({
  leftContainer: {
    minWidth: "40%",
    // textAlign: 'center',
    padding: "40px 0 0 80px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 40px",
    },
  },
  productImage: {
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "95%",
  },
  button: {
    width: "46%",
    borderRadius: 2,
    height: 50,
  },
  addToCart: {
    background: "#ff9f00",
    color: "#FFF",
  },
  buyNow: {
    background: "#fb641b",
    color: "#FFF",
  },
}));

export default function ActionItem() {
  const classes = useStyle();

  const [product, setProduct] = useState([]);

  // getting image from api
  const { slug } = useParams();
  async function GetData() {
    const res = await axios
      .get(`https://apis.chatvait.com/api/products/slug/${slug}`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      });
  }
  useEffect(() => {
    GetData();
  }, []);

  // posting item to cart
  const [cart, setCart] = useState([]);
  const [product_id, setProduct_id] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [featured_image, setFeatured_image] = useState("");

  async function AddItemToCart() {
    await axios
      .post(`https://apis.chatvait.com/api/cart`, {
        product_id: product._id,
        price: product.sale_price,
        title: product.title,
        featured_image: product.featured_image,
      })
      .then((res) => {
        console(res.data);
        setCart(res.data);
        alert("Item added");
      });
  }

  async function BuyNow() {
    await axios
      .post(`https://apis.chatvait.com/api/orders`, {
        product_id: product_id,
        price: price,
        title: title,
        featured_image: featured_image,
      })
      .then((res) => {
        console.log("Order Placed");
      });
  }
  return (
    <Box className={classes.leftContainer}>
      <img
        src={product.featured_image}
        className={classes.productImage}
        alt="featured imagess form api"
        onChange={(e) => setFeatured_image(e.target.value)}
      />

      <br />
      <div className="multiImage">{/* <img src=""></img> */}</div>
      <Button
        onClick={() => AddItemToCart()}
        className={clsx(classes.button, classes.addToCart)}
        style={{ marginRight: 10 }}
        variant="contained"
      >
        <Cart />
        Add to Cart
      </Button>
      <Button
        onClick={() => BuyNow()}
        className={clsx(classes.button, classes.buyNow)}
        variant="contained"
      >
        <Flash /> Buy Now
      </Button>

      {/* <Snackbar open={true} autoHideDuration={3000}>
        <Alert severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar> */}
    </Box>
  );
}
