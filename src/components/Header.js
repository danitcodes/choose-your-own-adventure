import React, { useState } from "react";
import Trail from './Trail';
import './TrailStyles.css'
import Move from "./Move";

function Header() {
  const [open, set] = useState(true);
  return (
    <>
      <div className="container" style={{zIndex: 3, textAlign: 'left'}}>
        {/* <Move></Move> */}
        <p style={{
          zIndex: 2,
          color: "white",
          fontStyle: "italic",
          paddingTop: '5px',
          textAlign: 'center',
          letterSpacing: '1px'
          }}>
          Animations:
          <br/> <span style={{letterSpacing: '10px', fontWeight: 'bolder'}}>pull</span> the pink button,
          <br/> <span style={{fontWeight: 'bolder', textShadow: '3px 3px gray' }}>click</span>  the header,
          <br/> and <span style={{fontWeight: 'bolder', fontStyle: 'normal', textShadow: '1px 1px blue'}}>move</span> the blob.
        </p>
        <h2 style={{ zIndex: 2, color: "white", letterSpacing: '2px'}}>
          Experience an Epicodus student's typical day.
        </h2>
        <p style={{
          zIndex: 3,
          color: "white",
          paddingTop: '10px',
          letterSpacing: '5px',
          textShadow: '1px 1px gray',
          textAlign: 'center'
          }}>
            #BlobForLife #ILoveBlob</p>
        <Trail open={open} onClick={() => set((state) => !state)}>
          <span>Day</span>
          <span>In The</span>
          <span>Life</span>
        </Trail>
      </div>
    </>
  );
}

export default Header;