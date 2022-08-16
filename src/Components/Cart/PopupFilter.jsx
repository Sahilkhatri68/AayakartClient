import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
function valuetext(value) {
  return `${value}°C`;
}
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
// filters

const BootstrapDialogTitle = (props) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function PopupFilter() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //   range
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Button onClick={handleClickOpen} sx={{ color: "white" }}>
        <DisplaySettingsIcon />
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ maxWidth: 400 }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Filter
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box sx={{ width: 120 }}>
            <Typography>Price</Typography>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Brand</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              //   value={age}
              label="brand"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Gucci</MenuItem>
              <MenuItem value={20}>Tommy</MenuItem>
              <MenuItem value={30}>Levis</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Type</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              //   value={age}
              label="brand"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Normal</MenuItem>
              <MenuItem value={20}>Partywear</MenuItem>
              <MenuItem value={30}>Casual</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Size</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              //   value={age}
              label="brand"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>S</MenuItem>
              <MenuItem value={20}>M</MenuItem>
              <MenuItem value={30}>L</MenuItem>
              <MenuItem value={40}>XL</MenuItem>
              <MenuItem value={50}>XXL</MenuItem>
            </Select>
          </FormControl>
          <Typography>
            You can filter your desireable products according to your needs &
            trends.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} variant="contained">
            Search
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
