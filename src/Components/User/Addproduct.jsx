import React from "react";
import "./addproduct.css";
// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
export default function Addproduct() {
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("form submitted ✅");
  };
  return (
    <>
      <div className="ctent">
        <div className="container">
          <div className="row align-items-stretch no-gutters contact-wrap">
            <div className="col-md-12">
              <div className="form h-100">
                <h3>Add Product</h3>
                <form className="mb-5" id="contactForm" name="contactForm">
                  <div className="row">
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">
                        Product Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
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
                        name="Category"
                        id="email"
                        placeholder="Category"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">
                        Product Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="Title"
                        id="name"
                        placeholder=" Title"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">
                        Product Slug
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="Slug"
                        id="name"
                        placeholder=" Slug"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">
                        Product tags
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="tags"
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
                        name="regularPrice"
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
                        name="SalePrice"
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
                        name="stockstaus"
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
                        name="Reviews"
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
                        name="Comments"
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
                        name=" Is_private"
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
                        name=" Tax_status"
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
                        name=" Tax_Class"
                        id=" Tax_Class"
                        placeholder="Yes/no"
                      />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="" className="col-form-label">
                        Tag's
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name=" Tag's"
                        id=" Tag's"
                        placeholder="Trending, Fun, Sports etc."
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
                        name="Description"
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
                      <input
                        type="submit"
                        defaultValue="Send Message"
                        className="btn btn-primary rounded-0 py-2 px-4"
                      />
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
