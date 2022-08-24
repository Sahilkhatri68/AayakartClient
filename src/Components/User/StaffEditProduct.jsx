import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function StaffEditProduct() {
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  async function Getproducts(slug) {
    try {
      const response = await axios.get(
        `https://ayakart.dauqu.com/api/products/slug/${slug}`
      );
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    Getproducts();
  }, []);
  return (
    <div>
      <div className="ctent">
        <div className="container">
          <div className="row align-items-stretch no-gutters contact-wrap">
            <div className="col-md-12">
              <div className="form h-100">
                <h3>Edit Product</h3>
                <form
                  className="mb-5"
                  method="post"
                  id="contactForm"
                  name="contactForm"
                >
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
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group mb-3">
                      <label htmlFor="budget" className="col-form-label">
                        Budget
                      </label>
                      <select
                        className="custom-select"
                        id="budget"
                        name="budget"
                      >
                        <option selected="">Choose...</option>
                        <option value="$1000 below">&lt; $1,000</option>
                        <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                        <option value="$5,000 - $15,000">
                          $5,000 - $15,000
                        </option>
                        <option value="$15,000 - $25,000">
                          $15,000 - $25,000
                        </option>
                        <option value="$25,000 >">$25,000 &gt;</option>
                      </select>
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
    </div>
  );
}
