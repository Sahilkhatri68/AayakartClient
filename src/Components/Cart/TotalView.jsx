import { useState, useEffect } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import axios from "axios";

const useStyle = makeStyles({
  component: {
    // width: '30%'
  },
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  greyTextColor: {
    color: "#878787",
  },
  container: {
    "& > *": {
      marginBottom: 20,
      fontSize: 14,
    },
  },
  price: {
    float: "right",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 600,
    borderTop: "1px dashed #e0e0e0",
    padding: "20px 0",
    borderBottom: "1px dashed #e0e0e0",
  },
});

const TotalView = ({ cartItems }) => {
  // getting data code -------------------
  const [product, setProduct] = useState([]);

  async function GetData() {
    const response = await axios
      .get(`http://localhost:4000/api/cart/`)
      .then((response) => {
        setProduct(response.data);
        GetData();
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    GetData();
  }, []);
  const classes = useStyle();
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();

  const totalAmount = () => {
    let price = 0;
    // console.log(product);
    product.map((product) => {
      let price = product.price;
      let discount = product.price - 1000;
      // console.log(discount);
    });
    setPrice(price);
    setDiscount(discount);
  };

  useEffect(() => {
    totalAmount();
  }, [cartItems, totalAmount]);

  return (
    <Box className={classes.component}>
      <Box
        className={classes.header}
        style={{ borderBottom: "1px solid #f0f0f0" }}
      >
        <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
      </Box>

      <Box className={clsx(classes.header, classes.container)}>
        <Typography>
          Quantity ({product?.length} item)
          <span className={classes.price}>₹{discount}</span>
        </Typography>
        <Typography>
          Discount<span className={classes.price}>₹500{discount}</span>
        </Typography>
        <Typography>
          Delivery Charges
          <span className={classes.price}>₹100</span>
        </Typography>
        <Typography className={classes.totalAmount}>
          Total Amount
          <span className={classes.price}>₹{product.sale_price}</span>
        </Typography>
        <Typography style={{ fontSize: 16, color: "green" }}>
          You will save ₹{100 - 40} on this order
        </Typography>
      </Box>
    </Box>
  );
};

export default TotalView;
