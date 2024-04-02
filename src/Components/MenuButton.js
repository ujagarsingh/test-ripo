import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

function MenuButton(props) {
  const { onClickFun, activeProp } = props;

  const div = styled("div")({
    display: "flex",
    flexDirection: "row",
  });

  const openMenu = () => {
    onClickFun(true);
  };
  const closeMenu = () => {
    onClickFun(false);
  };

  return (
    <div className="arrowKeys">
      {activeProp ? (
        <Button
          onClick={closeMenu}
          variant="outlined"
          sx={{ direction: "row" }}
        >
          <ArrowBackIcon />
        </Button>
      ) : (
        <Button onClick={openMenu} variant="outlined" sx={{ direction: "row" }}>
          <ArrowForwardIcon />
        </Button>
      )}
    </div>
  );
}

export default MenuButton;
