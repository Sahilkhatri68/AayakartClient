import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { ExpandMore } from "@material-ui/icons";

const price = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 30,
    label: "30",
  },
  {
    value: 100,
    label: "100",
  },
];
function valuetext(value) {
  return `${value}°C`;
}

export default function SimpleAccordion() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    return (
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Filter products</Typography>
          </AccordionSummary>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Category</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Male</MenuItem>
              <MenuItem value={20}>Female</MenuItem>
            </Select>
          </FormControl>
          <AccordionDetails>
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Custom price"
                defaultValue={20}
                getAriaValueText={valuetext}
                step={10}
                valueLabelDisplay="auto"
                marks={price}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  };
}
