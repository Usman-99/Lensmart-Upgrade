import React from 'react';
import web from "../Images/web.JPG"
import {Link} from "react-router-dom"

export default function Webimg() {
  return (
    <div className="webimg">
      <p style={{ textAlign: "justify" }}>
        <Link title="Buy Independence Day Eyeglasses " to="/EyeGlasses"><img className="img-fluid"
          title="Buy Stylish Independence Day Glasses at Eyeglasses PK" src={web}
          alt="Buy Stylish Independence Day Glasses at Eyeglasses PK" />
        </Link>
      </p>
    </div>
  )
}
