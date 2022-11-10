import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";

const BodyPart = () => {
  return (
    <Stack>
      <img
        src={Icon}
        alt="dumbell"
        className="body-part-icon"
        style={{ height: "40px", width: "40px" }}
      />
    </Stack>
  );
};

export default BodyPart;
