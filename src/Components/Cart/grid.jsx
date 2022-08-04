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

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
  return (
    <Box sx={{ flexGrow: 1, marginTop: 8 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
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
        <Grid item xs={10}>
          <Item className="itemdivflex">
            <div>
              <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image="https://m.media-amazon.com/images/I/81q1-5edHwL._UL1500_.jpg"
                />

                <CardContent className="cardcontdiv">
                  <div className="iconanddesc">
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <IconButton aria-label="settings">
                      <FavoriteIcon />
                    </IconButton>
                  </div>
                  <Typography variant="body2" color="text.secondary">
                    <div className="pricediv">
                      <BiRupee clas />
                      450
                    </div>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                  </Typography>
                </CardContent>
                <div className="outerdivbtn">
                  <button size="small" className="cartbtndiv">
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
            <div style={{ marginLeft: 20 }}>
              <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image="https://images.meesho.com/images/products/99166232/hvma7_512.jpg"
                />

                <CardContent className="cardcontdiv">
                  <div className="iconanddesc">
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <IconButton aria-label="settings">
                      <FavoriteIcon />
                    </IconButton>
                  </div>
                  <Typography variant="body2" color="text.secondary">
                    <div className="pricediv">
                      <BiRupee clas />
                      450
                    </div>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                  </Typography>
                </CardContent>
                <div className="outerdivbtn">
                  <button size="small" className="cartbtndiv">
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
            <div style={{ marginLeft: 20 }}>
              <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image="https://images.meesho.com/images/products/99166232/hvma7_512.jpg"
                />

                <CardContent className="cardcontdiv">
                  <div className="iconanddesc">
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <IconButton aria-label="settings">
                      <FavoriteIcon />
                    </IconButton>
                  </div>
                  <Typography variant="body2" color="text.secondary">
                    <div className="pricediv">
                      <BiRupee clas />
                      450
                    </div>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                  </Typography>
                </CardContent>
                <div className="outerdivbtn">
                  <button size="small" className="cartbtndiv">
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
            <div style={{ marginLeft: 20 }}>
              <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image="https://images.meesho.com/images/products/99166232/hvma7_512.jpg"
                />

                <CardContent className="cardcontdiv">
                  <div className="iconanddesc">
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <IconButton aria-label="settings">
                      <FavoriteIcon />
                    </IconButton>
                  </div>
                  <Typography variant="body2" color="text.secondary">
                    <div className="pricediv">
                      <BiRupee clas />
                      450
                    </div>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                  </Typography>
                </CardContent>
                <div className="outerdivbtn">
                  <button size="small" className="cartbtndiv">
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
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
