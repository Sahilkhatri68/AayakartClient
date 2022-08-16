import { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, InputBase, List, ListItem } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux"; // hooks
import { getProducts as listProducts } from "../../redux/actions/productActions";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const useStyle = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    marginLeft: 10,
    width: "38%",
    backgroundColor: "#dddddd",
    display: "flex",
  },
  searchIcon: {
    marginLeft: "auto",
    padding: 5,
    display: "flex",
    color: "blue",
    background: "#dddddd",
    marginRight: 10,
  },
  inputRoot: {
    fontSize: "unset",
    width: "100%",
  },
  inputInput: {
    paddingLeft: 20,
    width: "100%",
  },
  list: {
    position: "absolute",
    color: "#000",
    background: "#FFFFFF",
    marginTop: 36,
  },
}));

export default function Search() {
  const classes = useStyle();
  // const [text, setText] = useState();
  // const [open, setOpen] = useState(true);

  // const getText = (text) => {
  //   setText(text);
  //   setOpen(false);
  // };

  // const getProducts = useSelector((state) => state.getProducts);
  // const { products } = getProducts;

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(listProducts());
  // }, [dispatch]);

  const [search, setSearch] = useState("a");
  const { name } = useParams();
  async function GetData() {
    const res = await axios.get(
      `http://localhost:4000/api/products/search/${search}`
    );
    console.log(res.data);
    setSearch(res.data);
  }
  useEffect(() => {
    GetData();
  }, []);

  const input = (e) => {
    setSearch(e.target.value);
    GetData();
  };

  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search for products, brands and more"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={input}
      />
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
}
