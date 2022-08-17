import { useState, useEffect } from "react";
import { Box, Typography, makeStyles, Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import { getProductById } from "../../service/api";
// import { useDispatch, useSelector } from "react-redux";
import "./detailview.css";
// import { getProductDetails } from "../../redux/actions/productActions";
import axios from "axios";
import { BiRupee } from "react-icons/bi";
import { AiTwotoneStar } from "react-icons/ai";
import { TbBadge } from "react-icons/tb";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { BsCart3 } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Slide } from "react-slideshow-image";
const useStyles = makeStyles((theme) => ({
  component: {
    marginTop: 55,
    background: "#F2F2F2",
  },
  container: {
    background: "#FFFFFF",
    // margin: '0 80px',
    display: "flex",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  rightContainer: {
    marginTop: 50,
    "& > *": {
      marginTop: 10,
    },
  },
  price: {
    fontSize: 28,
  },
  smallText: {
    fontSize: 14,
  },
  greyTextColor: {
    color: "#878787",
  },
}));

const data = {
  id: "",
  url: "",
  detailUrl: "",
  title: {
    shortTitle: "",
    longTitle: "",
  },
  price: {
    mrp: 0,
    cost: 0,
    discount: "",
  },
  description: "",
  discount: "",
  tagline: "",
};

export default function DetailView() {
  const { slug } = useParams();
  const classes = useStyles();

  // getting data
  const [product, setProduct] = useState([]);
  async function GetProduct() {
    const response = await axios
      .get(`https://apis.chatvait.com/api/products/slug/${slug}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      });
  }
  useEffect(() => {
    GetProduct();
  }, []);

  // addtocart post request
  const [user_id, setUser_id] = useState("");
  const [product_id, setProduct_id] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [featured_image, setFeatured_image] = useState("");

  async function AddtoCart() {
    const resp = await axios
      .post(`https://apis.chatvait.com/api/cart/`, {
        product_id: product._id,
        quantity: 1,
        price: product.sale_price,
        title: product.title,
        featured_image: product.featured_image,
      })
      .then(function (resp) {
        console.log(resp);
        Swal.fire({
          icon: "success",
          title: "Item Added",
        });
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire({
          icon: "The Internet?",
          title: "Please Login first !",
        });
      });
  }
  return (
    <div className="mainproview">
      <div className="contproview">
        <div className="imgproview">
          <img className="proimgdiv" src={product.featured_image}></img>
          <div className="mainbtnpru">
            <button
              size="small"
              onClick={() => AddtoCart()}
              className="cartbtndivone"
            >
              <div className="reacticonsdiv">
                <BsCart3 />
              </div>
              <div className="btntext"> Add to cart</div>
            </button>

            <button size="small" className="buybtndivtow">
              <div className="reacticonsdiv">
                <GiElectric />
              </div>
              <div className="btntext"> Buy Now</div>
            </button>
          </div>
        </div>

        <div className="descproview">
          <div>
            <h4>{product.title}</h4>
          </div>
          <div>
            <h6>{product.description}</h6>
          </div>
          <div className="headpricediv">
            <p className="sphead">Special Price</p>
            <div className="pricedivview">
              <h3>
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "INR",
                }).format(product.sale_price)}
              </h3>
            </div>
          </div>
          <div className="btndivprod">
            <button className="ratingvidediv">
              <div>
                5 <AiTwotoneStar />
              </div>
            </button>
            <div className="desccproview">
              <p className="paradeszcpro">17 Rating & 9 Reviews</p>
            </div>
          </div>
          <div className="offersivview">
            <div>Available offers</div>
            <div className="maindescprodiv">
              <p>
                <LoyaltyIcon className="badgeclass" /> Partner OfferSign up for
                Flipkart Pay Later and get Flipkart Gift Card worth upto ₹500*
              </p>
              <p>
                <LoyaltyIcon className="badgeclass" />
                Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
