import React, { useState, useEffect } from 'react'
import axios from 'axios'
const email = "billybob@billy.com" // this will come from user registration

const UserCard = () => {
  const [data, setData] = useState("");

  const getData = () => {
    axios
      .get(`/api/users/get-user/${email}`)
      .then(response => {
        console.log(response.data)
        setData(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="card horizontal hoverable">
        <div className="card-stacked">
          <div className="card-content">
            <h5>
              Name: {data.firstname}
              {data.lastname}
            </h5>
          </div>
          <div className="card-content">
            <h5>Hobby: {data.hobby}</h5>
          </div>
          <div className="card-content">
            <h5>Favorite Sports Team: {data.sport}</h5>
          </div>
          <div className="card-content">
            <h5>Occupation: {data.occupation}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
