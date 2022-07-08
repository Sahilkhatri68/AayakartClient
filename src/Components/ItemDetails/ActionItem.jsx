import { useState, useContext, useReducer, useEffect } from "react";
import { Button, Box, makeStyles } from "@material-ui/core";
import { ShoppingCart as Cart, FlashOn as Flash } from "@material-ui/icons";
import clsx from "clsx";
import { useHistory, useParams } from "react-router-dom";
import { LoginContext } from "../../context/ContextProvider";
// import { initialState, reducer } from '../../reducers/reducer';
import { addToCart } from "../../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import { loadRazorpay } from "../../razorpay/loadPayment";
import axios from "axios";
import "./actionItemMultiImg.css";
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
  //   const history = useHistory();
  //   const { account } = useContext(LoginContext);

  const [product, setProduct] = useState([]);
  // getting image from api
  const { slug } = useParams();
  async function GetData() {
    const res = await axios.get(
      `https://web.chatvait.com/api/products/slug/${slug}`
    );
    console.log(res.data);
    setProduct(res.data);
  }
  useEffect(() => {
    GetData();
  }, []);

  // posting item to cart
  const [cart, setCart] = useState([]);
  async function AddItemToCart() {
    const res = await axios.post(`https://web.chatvait.com/api/cart/${slug}`);
    console.log(res.data);
    setCart(res.data);
    console.log(res.data);
  }

  const buyNow = async () => {
    // loadRazorpay(600);
    alert("item purchased");
  };

  return (
    <Box className={classes.leftContainer}>
      <img
        src={product.featured_image}
        className={classes.productImage}
        alt="featured imagess form api"
      />

      <br />
      <div className="multiImage">
        <img src=""></img>
      </div>
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
        onClick={() => buyNow()}
        className={clsx(classes.button, classes.buyNow)}
        variant="contained"
      >
        <Flash /> Buy Now
      </Button>
    </Box>
  );
}
