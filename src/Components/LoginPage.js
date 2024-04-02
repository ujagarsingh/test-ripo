import styled from "@emotion/styled";
import { Autocomplete, Input, InputBase, TextField } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom/dist";

function LoginPage() {
  const div = styled("div")({});
  return (
    <div>
      <h1>LOGIN</h1>
      <InputBase placeholder="Username" variant="outlined"></InputBase>
      <h1>Page</h1>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </div>
  );
}

export default LoginPage;
