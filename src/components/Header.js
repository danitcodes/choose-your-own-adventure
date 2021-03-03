import React, { useState } from "react";
import Trail from './Trail';
import './TrailStyles.css'

function Header() {
  const [open, set] = useState(true);
  return (
    <>
      <div className="container" style={{zIndex: 3, textAlign: 'left'}}>
        {/* <h1 style={{ zIndex: 3, color: "white", fontSize: "60px", letterSpacing: '10px', textTransform: 'uppercase', textShadow: '4px 4px gray' }}>
          A Day in the Life
        </h1> */}
        <h2 style={{ zIndex: 2, color: "white"}}>
          Experience an Epicodus student's typical day.
        </h2>
        <p style={{
          zIndex: 2,
          color: "white",
          fontStyle: "italic",
          paddingTop: '5px',
          textAlign: 'center',
          letterSpacing: '1px'
          }}>
          Animations:
          <br/> pull the pink button,
          <br/> click the header,
          <br/> and move the blob.
        </p>
        <p style={{ zIndex: 3, color: "white", paddingTop: '10px', letterSpacing: '5px', textShadow: '1px 1px gray'}}>#BlobForLife #ILoveBlob</p>
        <Trail open={open} onClick={() => set((state) => !state)}>
          <span>Day</span>
          <span>In</span>
          <span>The</span>
          <span>Life</span>
        </Trail>
      </div>
    </>
  );
}

export default Header;