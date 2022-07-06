import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { setUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

export default function Nav() {
  const user = useSelector((state) => state.users.userLoggedIn);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setUser(null));
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            alt={user?.name}
            src={user?.avatarURL}
            sx={{
              marginRight: "1rem",
            }}
          />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user?.name}
          </Typography>
          <MenuItem>
            <Typography textAlign="center" onClick={() => navigate("/")}>
              Home
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography
              textAlign="center"
              onClick={() => navigate("/leaderboard")}
            >
              Leaderboards
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center" onClick={() => navigate("/add")}>
              Create poll{" "}
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center">| </Typography>
          </MenuItem>

          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
