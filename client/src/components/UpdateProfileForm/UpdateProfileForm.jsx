import React, { useState } from "react";

const UpdateProfileForm = ({ handleFormSubmit }) => {
  const [occupation, setOccupation] = useState("");
  const [sports, setSports] = useState("");
  const [hobbies, setHobbies] = useState("");

  return (
    <>
      <form
        className="col s12"
        onSubmit={(e) => {
          handleFormSubmit(e, {
            occupation,
            sports,
            hobbies,
          });
        }}
      >
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Occupation"
              id="title"
              type="text"
              name="occupation"
              value={occupation}
              onChange={(e) => {
                setOccupation(e.target.value);
              }}
            />
            <label htmlFor="occupation">Occupation</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Favorite Sports Team"
              id="sports"
              type="text"
              name="sports"
              value={sports}
              onChange={(e) => {
                setSports(e.target.value);
              }}
            />
            <label htmlFor="sports">Favorite Sports Team</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Hobbies"
              id="hobbies"
              type="text"
              name="hobbies"
              value={hobbies}
              onChange={(e) => {
                setHobbies(e.target.value);
              }}
            />
            <label htmlFor="hobbies">Hobbies</label>
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
