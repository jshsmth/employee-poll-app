import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import { setUser } from "../store/userSlice";
import { useDispatch } from "react-redux";

function createData(avatarUrl, name, questionsMade, passwords) {
  return { avatarUrl, name, questionsMade, passwords };
}

function ChooseUser({ allUsers }) {
  const userAccounts = allUsers[0] || {};
  const userNames = Object.keys(userAccounts);
  const dispatch = useDispatch();

  const handleAssignUser = (userName) => {
    const userData = userAccounts[userName];
    dispatch(setUser(userData));
  };

  const rows = [
    ...userNames.map((name) => {
      const user = userAccounts[name];
      const password = user?.password;
      const avatarUrl = user?.avatarUrl;
      const questionsMade = user?.questions.length || 0;
      return createData(avatarUrl, name, questionsMade, password);
    }),
  ];

  return (
    <Container>
      <Box
        sx={{
          marginTop: "10rem",
        }}
      >
        <Typography variant="h2" component="div" gutterBottom>
          Employee poll app
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          Please select a user from the list below to be signed in as that
          particular user.
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>User Avatars</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Questions created</TableCell>
                <TableCell align="right">Passwords</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row?.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => handleAssignUser(row?.name)}
                >
                  <TableCell component="th" scope="row">
                    <Avatar alt="user" src={row?.avatarUrl} />
                  </TableCell>
                  <TableCell align="right">{row?.name}</TableCell>
                  <TableCell align="right">{row?.questionsMade}</TableCell>
                  <TableCell align="right">{row?.passwords}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default ChooseUser;
