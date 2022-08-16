import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import { BsCart3 } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { GiElectric } from "react-icons/gi";
import "./grid.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import Swal from "sweetalert2";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import PopupFilter from "./PopupFilter";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// heart icon
const label = { inputProps: { "aria-label": "Checkbox demo" } };

// range slider function

function valuetext(value) {
  return `${value}°C`;
}

export default function BasicGrid() {
  // brand change
  const [brand, setBrand] = React.useState("");

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  // type change
  const [type, setType] = useState("");
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  // ratings
  const [ratings, setRatings] = useState("");
  const handleRatings = (e) => {
    setRatings(e.target.value);
  };
  // size
  const [size, setsize] = useState("");
  const handleSize = (e) => {
    setsize(e.target.value);
  };
  // price range slider
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // getting data code -------------------
  const [product, setProduct] = useState([]);

  async function GetData() {
    const response = await axios
      .get(`https://apis.chatvait.com/api/products`)
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

  // add to cart code----------------------
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
      });
  }

  // heart icon color change------------------

  return (
    <Box sx={{ flexGrow: 1, marginTop: 8 }}>
      <Grid container spacing={2}>
        <Grid item xs={2} className="leftfilgrid">
          <Item>
            <h4>Filter</h4>
            {/* brand */}
            <div className="formcontd">
              <FormControl sx={{ minWidth: 100 }} size="small">
                <InputLabel id="demo-select-small">Brand</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={brand}
                  label="brand"
                  onChange={handleBrandChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* type */}
            <div className="typediv">
              <FormControl sx={{ minWidth: 100 }} size="small">
                <InputLabel id="demo-select-small">Type</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={type}
                  label="type"
                  onChange={handleTypeChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Normal</MenuItem>
                  <MenuItem value={20}>Partywear</MenuItem>
                  <MenuItem value={30}>Western</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* ratings */}
            <div className="typediv">
              <FormControl sx={{ minWidth: 100 }} size="small">
                <InputLabel id="demo-select-small">Ratings</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={ratings}
                  label="ratings"
                  onChange={handleRatings}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* size */}
            <div className="typediv">
              <FormControl sx={{ minWidth: 100 }} size="small">
                <InputLabel id="demo-select-small">Size</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={size}
                  label="size"
                  onChange={handleSize}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>S</MenuItem>
                  <MenuItem value={20}>M</MenuItem>
                  <MenuItem value={30}>L</MenuItem>
                  <MenuItem value={40}>XL</MenuItem>
                  <MenuItem value={50}>XXL</MenuItem>
                  <MenuItem value={60}>XXXL</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="typediv">
              <h5>Price</h5>
            </div>
            <div className="typediv">
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </div>
          </Item>
        </Grid>
        <Grid item xs={10} className="gridviewall">
          <div className="hiddennavb">
            <div className="hiddenhead">Filters</div>
            <div>
              <IconButton aria-label="edit" size="small">
                <PopupFilter />
              </IconButton>
            </div>
          </div>
          <Item className="itemdivflex">
            {product.map((product) => {
              return (
                <>
                  <div className="cardcontgrid">
                    <Card sx={{ maxWidth: 250, margin: 1 }}>
                      <CardMedia
                        component="img"
                        alt="Img"
                        height="200"
                        src={product.featured_image}
                      />
                      <CardContent className="cardcontdiv">
                        <div className="iconanddesc">
                          <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                          </Typography>
                          <IconButton aria-label="settings">
                            <Checkbox
                              {...label}
                              icon={<FavoriteBorder />}
                              checkedIcon={<Favorite />}
                            />
                          </IconButton>
                        </div>
                        <Typography variant="body2" color="text.secondary">
                          <div className="pricediv">
                            <BiRupee clas />
                            {product.sale_price}
                          </div>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.description}
                        </Typography>
                      </CardContent>
                      <div className="outerdivbtn">
                        <button
                          size="small"
                          className="cartbtndiv"
                          onClick={() => AddtoCart()}
                        >
                          <div className="reacticonsdiv">
                            <BsCart3 />
                          </div>
                          <div className="btntext"> Add to cart</div>
                        </button>
                        <button size="small" className="buybtndiv">
                          <div className="reacticonsdiv">
                            <GiElectric />
                          </div>
                          <div className="btntext"> Buy Now</div>
                        </button>
                      </div>
                      <CardActions></CardActions>
                    </Card>
                  </div>
                </>
              );
            })}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
