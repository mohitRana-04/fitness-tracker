import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/woman.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "180px", xs: "70px" },
        my: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#E4F9F5" fontWeight="600" fontSize="26px">
        Walk-in Fitness
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            sx: "40px",
          },
        }}
        mb="23px"
        mt="30px"
        color="#30E3CA"
      >
        You are condemned <br /> To REPEAT
      </Typography>
      <Typography fontSize="22px" lineHieght="35px" mb={4} color="#E4F9F5">
        Follow for more
      </Typography>

      <Button
        variant="contained"
        color="error"
        href="#excercise"
        sx={{
          backgroundColor: "#11999E",
          padding: "10px",
        }}
      >
        Explore Exercise
      </Button>
      <Typography
        fontWeight={600}
        color="#E4F9F5"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        {" "}
        FLEXXXX!!!{" "}
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
