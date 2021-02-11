import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./UserCard.css";
import globalUser from "../../utils/globalUser";
// const email = "billybob@billy.com";

// this will come from user registration

const UserCard = () => {
  const [data, setData] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [occupation, setOccupation] = useState("");
  const [sport, setSport] = useState("");
  const [hobby, setHobby] = useState("");

  const { id } = useParams();
  const getData = () => {
    axios
      .get(`/api/users/get-user/${id}`)
      .then((response) => {
        console.log(response.data);
        const {
          firstname,
          lastname,
          email,
          password,
          occupation,
          sport,
          hobby,
        } = response.data;
        setFirstName(firstname);
        setLastName(lastname);
        setEmail(email);
        setPassword(password);
        setOccupation(occupation);
        setSport(sport);
        setHobby(hobby);
      })
      .catch((err) => {
        console.log(err);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const newUser = useContext(globalUser);
  console.log(newUser);

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className>
      <div className="card horizontal hoverable">
        <div className="card-stacked">
          <div className="card-content left-align">
            <h5>
              Name: {firstname} {lastname}
            </h5>
            <h5>Hobby: {hobby}</h5>
            <h5>Favorite Sports Team: {sport}</h5>
            <h5>Occupation: {occupation}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
