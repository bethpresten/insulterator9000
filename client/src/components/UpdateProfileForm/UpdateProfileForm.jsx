import React, { useState } from "react";

const UpdateProfileForm = ({ handleFormSubmit }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [featured, setFeatured] = useState(false);

  return (
    <>
      <form
        className="col s12"
        onSubmit={(e) => {
          handleFormSubmit(e, {
            title,
            price,
            description,
            imageURL,
            category,
            quantity,
            featured,
          });
        }}
      >
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Product Title"
              id="title"
              type="text"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label htmlFor="title">Occupation</label>
          </div>
          <div className="input-field col s6">
            <input
              placeholder="Product Price"
              id="price"
              type="text"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <label htmlFor="price">Favorite Sports Team</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Product Description"
              id="description"
              type="text"
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <label htmlFor="description">Hobbies</label>
          </div>
        </div>
        {/* <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Product Image"
              id="imageURL"
              type="text"
              name="imageURL"
              value={imageURL}
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
            />
            <label htmlFor="imageURL">Product Image</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Product Category"
              id="category"
              type="text"
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <label htmlFor="category">Product Category</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="Product Quantity"
              id="quantity"
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <label htmlFor="quantity">Product Quantity</label>
          </div>
          <div className="input-field col s6">
            <label>
              <input
                type="checkbox"
                checked={featured}
                onChange={() => {
                  setFeatured(!featured);
                }}
              />
              <span>Featured?</span>
            </label>
          </div>
        </div> */}
        <div className="row">
          <div className="col s12">
            <button className="waves-effect waves-light btn hoverable">
              Update Profile
            </button>
            <button className="waves-effect waves-light btn hoverable">
              Delete Profile Profile
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateProfileForm;
