import React from "react";

function Header() {
  return (
    <>
      <h1 style={{ zIndex: 3, color: "white", fontSize: "60px" }}>
        Choose Your Own Adventure!
      </h1>
      <h2 style={{ zIndex: 2, color: "white" }}>
        This choose-your-own-adventure follows the day in the life of an
        Epicodus student.
      </h2>
    </>
  );
}

export default Header;
