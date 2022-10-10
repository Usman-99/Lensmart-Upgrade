import React from 'react';
import man from "../Images/men.png";
import women from "../Images/women.png";
import kids from "../Images/kids.png";
import sunglasses from "../Images/sunglasses.png";
import {HashLink} from "react-router-hash-link";


export default function Eyeglasses() {
  return (
    <div className="w3-container mb-5"  id="eye">
      <h3 className="w3-center w3-xlarge">
        <b>EYEGLASSES CATEGORIES</b>
      </h3>
      <p className="mt-3 w3-center w3-xlarge">
        <b>WE CARE ABOUT YOUR CHOICE</b>
      </p>
      <div className="w3-row-padding" style={{
        marginTop: 60, display: "flex",
        justifyContent: "center",
        width: "100%",
        flexWrap: "wrap"
      }}>
        <div className="w3-col l3 m6">
          <HashLink to="/Products#man" smooth>
            <img
              src={man}
              style={{ width: "100%" }}
              className="w3-hover-opacity w3-hover-green py-3"
              alt="men glasses"
            />
          </HashLink>
        </div>
        <div className="w3-col l3 m6">
          <HashLink to="/Products#woman" smooth>
            <img
              src={women}
              style={{ width: "100%" }}
              className="w3-hover-opacity w3-hover-yellow py-3"
              alt="women glasses"
            />
          </HashLink>
        </div>
        <div className="w3-col l3 m6">
          <HashLink to="/Products#kid" smooth>
            <img
              src={kids}
              style={{ width: "100%" }}
              className="w3-hover-opacity w3-hover-purple py-3"
              alt="kids glasses"
            />
          </HashLink>
        </div>
        <div className="w3-col l3 m6">
          <HashLink to="/Products#sun" smooth>
            <img
              src={sunglasses}
              style={{ width: "100%" }}
              className="w3-hover-opacity w3-hover-red py-3"
              alt="Sunglasses"
            />
          </HashLink>
        </div>
      </div>
    </div>

  )
}
