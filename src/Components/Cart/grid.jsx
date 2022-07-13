import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import "./grid.css";
import Slider from "@mui/material/Slider";
import { AiTwotoneStar } from "react-icons/ai";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// chip data
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
// chip data end
// chip funciton
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
// chip funciton end

export default function BasicGrid() {
  // gender code
  const [age, setAge] = React.useState("");

  const handleChangeE = (event) => {
    setAge(event.target.value);
  };
  // gender code end

  // code of chip
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  // slider code start
  const [value, setValue] = React.useState([20, 37]);

  const handleChangEe = (event, newValue) => {
    setValue(newValue);
  };
  // slider code end
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Gender</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={20}>Male</MenuItem>
                <MenuItem value={30}>Female</MenuItem>
              </Select>
            </FormControl>
          </Item>
          <Item>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-multiple-chip-label">Brand</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Item>
          <Item>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-multiple-chip-label">Stuff</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                // onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Item>
          <Item>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Item</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={20}>Trending</MenuItem>
                <MenuItem value={30}>Hot Selling</MenuItem>
              </Select>
            </FormControl>
          </Item>
          <Item>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Rating</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={20}>
                  5 <AiTwotoneStar />
                </MenuItem>
                <MenuItem value={30}>
                  4 <AiTwotoneStar />
                </MenuItem>
                <MenuItem value={40}>
                  3 <AiTwotoneStar />
                </MenuItem>
                <MenuItem value={50}>
                  2 <AiTwotoneStar />
                </MenuItem>
                <MenuItem value={60}>
                  1 <AiTwotoneStar />
                </MenuItem>
              </Select>
            </FormControl>
          </Item>
          <Item>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Quantity</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                // value={age}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={20}>1 Kg</MenuItem>
                <MenuItem value={30}>2 Kg</MenuItem>
                <MenuItem value={40}>5 Kg</MenuItem>
                <MenuItem value={50}>10 Kg</MenuItem>
              </Select>
            </FormControl>
          </Item>
          <Item>
            <b>Price Range</b>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              // onChange={handleChange}
              valueLabelDisplay="auto"
            />
          </Item>
        </Grid>
        <Grid item xs={10}>
          <Item>
            <div className="mainproduct">
              <div className="cardd">
                <img alt="img"></img>
                <h3>Img details</h3>
                <div className="btnss">
                  <button className="adc">Add to Cart</button>
                  <button className="btnbuy">Buy now</button>
                </div>
              </div>
              <div className="cardd">
                <img alt="img"></img>
                <h3>Img details</h3>
                <div className="btnss">
                  <button className="adc">Add to Cart</button>
                  <button className="btnbuy">Buy now</button>
                </div>
              </div>
              <div className="cardd">
                <img alt="img"></img>
                <h3>Img details</h3>
                <div className="btnss">
                  <button className="adc">Add to Cart</button>
                  <button className="btnbuy">Buy now</button>
                </div>
              </div>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
