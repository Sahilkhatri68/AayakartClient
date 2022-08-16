import { Card, makeStyles, Box, Typography, Button } from "@material-ui/core";
import clsx from "clsx";
import GroupButton from "./GroupButton";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
const useStyle = makeStyles({
  component: {
    borderTop: "1px solid #f0f0f0",
    borderRadius: 0,
    display: "flex",
  },
  leftComponent: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
  },
  image: {
    height: 110,
    width: 110,
  },
  mid: {
    margin: 20,
  },
  greyTextColor: {
    color: "#878787",
  },
  smallText: {
    fontSize: 14,
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
  },
  remove: {
    marginTop: 20,
    fontSize: 16,
  },
});

const CartItem = ({ item, RemoveItemFromCart }) => {
  console.log(item);
  const classes = useStyle();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  // getting data code -------------------
  const [product, setProduct] = useState([]);

  async function GetData() {
    const response = await axios
      .get(`https://apis.chatvait.com/api/cart`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    GetData();
  }, []);

  const { id } = useParams();
  async function RemoveItem(id) {
    const res = await axios
      .delete(`https://apis.chatvait.com/api/cart/${id}`)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          icon: "Success",
          title: "Item Removed",
        });
        GetData();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    RemoveItem(id);
  }, []);

  return (
    <>
      {product.map((product) => {
        return (
          <>
            <Card className={classes.component}>
              <Box className={classes.leftComponent}>
                <img
                  src={product.product_image}
                  className={classes.image}
                  alt="cart"
                />
                <GroupButton />
              </Box>

              <Box className={classes.mid}>
                <Typography>{product.product_name}</Typography>
                <Typography
                  className={clsx(classes.greyTextColor, classes.smallText)}
                  style={{ marginTop: 10 }}
                >
                  Seller:RetailNet
                  <span>
                    <img
                      src={fassured}
                      style={{ width: 50, marginLeft: 10 }}
                      alt=""
                    />
                  </span>
                </Typography>
                <Typography style={{ margin: "20px 0" }}>
                  <span className={classes.price}>₹{product.price}</span>
                  &nbsp;&nbsp;&nbsp;
                  <span className={classes.greyTextColor}>
                    <strike>₹500</strike>
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span style={{ color: "#388E3C" }}>
                    {product.regular_price} off
                  </span>
                </Typography>
                <Button
                  className={classes.remove}
                  onClick={() => RemoveItem(`${product.id}`)}
                >
                  Remove
                </Button>
              </Box>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default CartItem;
