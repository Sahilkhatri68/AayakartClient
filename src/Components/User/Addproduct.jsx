import React, { useEffect, useState } from "react";
import "./addproduct.css";

// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
import axios from "axios";

export default function Addproduct() {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("form submitted ✅");
  };

  // upload product by user
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [featured_image, setFeatured_image] = useState("");
  const [regular_price, setRegular_price] = useState();
  const [sale_price, setSale_price] = useState();
  const [stock_status, setStock_status] = useState();
  const [enable_reviews, setEnable_reviews] = useState();
  const [enable_comments, setEnable_comments] = useState("");
  const [isprivate, setIsprivate] = useState("");
  const [tax_status, setTax_status] = useState("");
  const [tax_class, setTax_class] = useState("");
  const [tags, setTags] = useState("");

  // Upload File
  const onChange = (e) => {
    let url = `https://ayakart.dauqu.com/api/files/`;
    let file = e.target.files[0];
    uploadFile(url, file);
    // getFileData();
  };

  // Upload File
  const uploadFile = (url, file) => {
    let formData = new FormData();
    formData.append("uploadedFile", file);
    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((e) => {
        // setAlert("File successfully uploaded", e);
        // setStatus("success", e);
        // getFileData();
        // setOpen(true);
        console.log(e);
      })
      .catch((e) => {
        // setAlert(e.response.data.message);
        // setStatus(e.response.data.status);
        console.log(e);
      });
  };

  // if (!files) return null;
  return (
    <>
      <div className="ctent">
        <div className="container">
          <div className="row align-items-stretch no-gutters contact-wrap">
            <div className="col-md-12">
              <div className="form h-100">
                <h3>Add Product</h3>
                <form
                  className="mb-5"
                  id="contactForm"
                  name="contactForm"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">
                        Product Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id="name"
                        placeholder=" name"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">
                        Product Category
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name={category}
                        onChange={(e) => setCategory(e.target.value)}
                        id="email"
                        placeholder="Category"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">
                        Slug
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        id="name"
                        placeholder=" Title"
                      />
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">
                        Product tags
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name={tags}
                        onChange={(e) => setTags(e.target.value)}
                        id="email"
                        placeholder="tags"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">
                        Product RegularPrice
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name={regular_price}
                        onChange={(e) => setRegular_price(e.target.value)}
                        id="email"
                        placeholder="regularprice"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">
                        Product SalePrice
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name={sale_price}
                        onChange={(e) => setSale_price(e.target.value)}
                        id="email"
                        placeholder="SalePrice"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">
                        Stock Status
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name={stock_status}
                        onChange={(e) => setStock_status(e.target.value)}
                        id="stockstatus"
                        placeholder="Stock Status"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">
                        Reviews
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name={enable_reviews}
                        onChange={(e) => setEnable_reviews(e.target.value)}
                        id="Reviews"
                        placeholder="Reviews"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">
                        Comments
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name={enable_comments}
                        onChange={(e) => setEnable_comments(e.target.value)}
                        id="Comments"
                        placeholder="Comments"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">
                        Is_private
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name={isprivate}
                        onChange={(e) => setIsprivate(e.target.value)}
                        id=" Is_private"
                        placeholder="Yes/no"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">
                        Tax_status
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name={tax_status}
                        onChange={(e) => setTax_status(e.target.value)}
                        id=" Tax_status"
                        placeholder="Yes/no"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">
                        Tax_Class
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name={tax_class}
                        onChange={(e) => setTax_class(e.target.value)}
                        id=" Tax_Class"
                        placeholder="Yes/no"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">
                        featured_image
                      </label>
                      <input
                        name="uploadedFile"
                        multiple
                        type="file"
                        onChange={onChange}
                        id="contained-button-file"
                        accept="*"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 form-group mb-3">
                      <label htmlFor="message" className="col-form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        name={description}
                        onChange={(e) => setDescription(e.target.value)}
                        id="Description"
                        cols={30}
                        rows={3}
                        placeholder="Write your message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <button
                        type="submit"
                        className="btn btn-primary rounded-0 py-2 px-4"
                        onClick={() => uploadFile()}
                      >
                        Submit
                      </button>
                      <span className="submitting" />
                    </div>
                  </div>
                </form>
                <div id="form-message-warning mt-4" />
                <div id="form-message-success">
                  Your message was sent, thank you!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
