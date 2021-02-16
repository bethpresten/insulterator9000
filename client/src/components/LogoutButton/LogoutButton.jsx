import React from "react";

// import "./LogoutButton.css";

function LogOutButton() {
  
  return (
    <div>
      
        <button
          className="btn hoverable"
          id="logout-button"
          // to="/welcome"
          onClick={() => {
            window.location.reload();
            localStorage.clear();
            alert("successfully logged out!");
            // history.push("/welcome");
          }}
        >
          Logout
        </button>
      
    </div>
  );
}
export default LogOutButton;
