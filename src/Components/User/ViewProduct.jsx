import React from "react";
import { Link } from "react-router-dom";
import { RiAuctionLine } from "react-icons/ri";
import { BiRupee } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import SimpleImageSlider from "react-simple-image-slider";
import { IconButton } from "@mui/material";
import "./viewproduct.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
export default function ViewProduct() {
  const [product, setProduct] = useState([]);
  async function Getproducts() {
    try {
      const response = await axios.get("https://ayakart.dauqu.com/api/products");
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    Getproducts();
  }, []);

  // async function HandleEdit(id) {
  //   try {
  //     const response = await axios.get(
  //       `https://ayakart.dauqu.com/api/products/${id}`
  //     );
  //     setProduct(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // React.useEffect(() => {
  //   Getproducts();
  // }, []);

  // Delete

  const RemoveProduct = async (_id) => {
    try {
      await axios.delete(`https://ayakart.dauqu.com/api/products/${_id}`);
      Swal.fire("Product Deleted!", "success");
      Getproducts();
    } catch (error) {
      console.log(error);
    }
  };

  const sapmle = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <>
      <div className="med">
        <div className=" insidemed">
          <h1 className="hedmed">Product's</h1>
        </div>
      </div>

      <div className="tableclass">
        <table>
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Title</th>
              <th scope="col">Sale_Price</th>
              <th scope="col">Regular_Price</th>
              <th scope="col">Description</th>
              <th scope="col">
                Edit <FiEdit />
              </th>
              <th scope="col">
                Delete <DeleteForeverIcon />
              </th>
            </tr>
          </thead>
          {product.map((item) => {
            return (
              <tbody>
                <tr>
                  <td data-label="Product">
                    <img className="imgget" src={item.featured_image}></img>
                  </td>
                  <td data-label="Title"> {item.title} </td>
                  <td data-label="Sale_Price">
                    <BiRupee />
                    {item.sale_price}
                  </td>
                  <td data-label="Sale_Price">
                    <BiRupee />
                    {item.regular_price}
                  </td>
                  <td data-label="Description">{item.description}</td>

                  <td data-label="edit">
                    <Link to={`/stafeditprod/product/${item.slug}`}>
                      <FiEdit
                        style={{ color: "black", height: 20, width: 30 }}
                      />
                    </Link>
                  </td>
                  <td data-label="delete">
                    <IconButton onClick={() => RemoveProduct(`${item._id}`)}>
                      <DeleteForeverIcon style={{ color: "red" }} />
                    </IconButton>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}
