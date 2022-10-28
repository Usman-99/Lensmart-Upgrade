import React, { useState } from 'react';
import logo from "../Images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import cart from "../Images/cart.gif";


export default function Navbar(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();
    return (<>
        <nav className='navbar' style={{ height: "5px" }}>
            <div className="w3-top">
                <div className="w3-bar w3-black w3-card container-fluid" id="myNavbar">
                    <button className="navbar-brand">
                        <img src={logo} alt="Company logo" width="90" height="50" className="d-inline-block align-text-top" onClick={() => {
                            navigate("/")
                        }} /></button>

                    <div className="w3-right w3-hide-small">
                        <Link className="w3-bar-item w3-button w3-hover-teal" to="/"><i className="fa fa-home"></i> HOME</Link>
                        <button className='w3-bar-item w3-button w3-hover-teal' onClick={() => {
                            navigate("/About")
                        }}><i className="fa fa-globe"></i> ABOUT</button>
                        <button className='w3-bar-item w3-button w3-hover-teal' onClick={() => {
                            navigate("/Team")
                        }}><i className="fa fa-children"></i> TEAM</button>
                        <button className='w3-bar-item w3-button w3-hover-teal' onClick={() => {
                            navigate("/Eyeglasses")
                        }}><i className="fa fa-glasses"></i> EYEGLASSES</button>
                        <button className='w3-bar-item w3-button w3-hover-teal' onClick={() => {
                            navigate("/Contact")
                        }}><i className="fa fa-envelope"></i> CONTACT</button>
                        <button className="w3-bar-item w3-button w3-hover-teal" onClick={() => {
                            navigate("/Account")
                        }}><i className="fa fa-user"></i> MY ACCOUNT</button>
                        <div className="w3-dropdown-hover w3-hover-teal">
                            <button className="w3-button w3-bar-item w3-hover-teal"><i className="fas fa-shopping-basket"></i> PRODUCTS</button>
                            <div className="w3-dropdown-content w3-bar-block w3-card-4">
                                <HashLink to="/Products#man" className="w3-bar-item w3-button w3-hover-teal">Man Glasses</HashLink>
                                <HashLink to="/Products#woman" className="w3-bar-item w3-button w3-hover-teal">Woman Glasses</HashLink>
                                <HashLink to="/Products#kid" className="w3-bar-item w3-button w3-hover-teal">Kids Glasses</HashLink>
                                <HashLink to="/Products#sun" className="w3-bar-item w3-button w3-hover-teal">SunGlasses</HashLink>
                            </div>
                        </div>
                        <button className='w3-bar-item w3-button w3-hover-teal' onClick={() => {
                        }}>
                            <Badge badgeContent={4} color="primary" id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>
                                <i className="fa-sharp fa-solid fa-cart-shopping" style={{ fontSize: "25px" }}></i>
                            </Badge>
                        </button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem>
                                <div className='row px-3 d-flex' style={{ height: "55px" }}>
                                    <p className='col-7 text-dark text-center py-1 px-1' style={{ alignItems: "center",fontSize:"22px" }}>Cart is empty</p>
                                    <img className='col-4 ms-2' src={cart} alt="cart"   style={{width:"5rem"}} />
                                    <i className="fa-sharp fa-solid fa-xmark col-1 mt-0" onClick={handleClose}></i>
                                </div>
                            </MenuItem>
                            {/* <MenuItem onClick={handleClose}>Cart is Empty</MenuItem> */}
                        </Menu>
                    </div>
                </div>
            </div>
        </nav>
    </>
    )
}
