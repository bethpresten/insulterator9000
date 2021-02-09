import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./UserCard.css";
import globalUser from "../../utils/globalUser";
const email = "billybob@billy.com";

// this will come from user registration

const UserCard = () => {
  const [data, setData] = useState("");

  const getData = () => {
    axios
      .get(`/api/users/get-user/${email}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const newUser = useContext(globalUser);
  console.log(newUser);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className>
      <div className="card horizontal hoverable">
        <div className="card-stacked">
          <div className="card-content left-align">
            <h5>
              Name: {newUser.firstname} {newUser.lastname}
            </h5>
            <h5>Hobby: {newUser.hobby}</h5>
            <h5>Favorite Sports Team: {newUser.sport}</h5>
            <h5>Occupation: {newUser.occupation}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
