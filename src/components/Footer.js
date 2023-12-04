import { Box } from "@mui/system";
import React from "react";
import "./Footer.css";
import { Switch } from 'react-router-dom';



const Footer = () => {
  return (
    <Box className="footer">
      <Box>
        <img src="logo_dark.svg" alt="QKart-icon"></img>
      </Box>
      <p className="footer-text">
        QKart is your one stop solution to the buy the latest trending items
        with India's Fastest Delivery to your doorstep

      </p>
      {/* <button onclick="Login()">LOGIN</button>
      <button onclick="Register()">REGISTER</button>
      
 */}

      

      
    </Box>
  );
};

export default Footer;
