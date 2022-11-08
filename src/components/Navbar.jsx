import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

// import Logo from "../assets/images/Logo.png";
import Logo from "../assets/images/image-removebg-preview (1).png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "100px", xs: "40px" },
        mt: { sm: "30px", xs: "20px" },
        justifyContent: "none",
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt=""
          style={{
            width: "100px",
            height: "80px",
            margin: "0 20px",
          }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#30E3CA",
            borderBottom: "3px solid #30E3CA",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "#30E3CA",
          }}
        >
          Exercise
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
