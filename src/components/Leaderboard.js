import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

function createData(avatarUrl, name, questionsMade, created, totalPoints) {
  return { avatarUrl, name, questionsMade, created, totalPoints };
}

function Leaderboard() {
  const userLoggedIn = useSelector((state) => state.users.userLoggedIn);
  const allUsers = useSelector((state) => state.users?.value);
  const userAccounts = allUsers[0] || {};
  const userNames = Object.keys(userAccounts);

  ////////////////////////////////////

  ////////////////////////////////////

  const rows = [
    ...userNames.map((name) => {
      const user = userAccounts[name];

      const answersLength = Object.keys(user.answers);
      const created = answersLength?.length || 0;
      const avatarUrl = user?.avatarURL;
      const questionsMade = user?.questions.length || 0;
      const totalPoints = created + questionsMade;
      return createData(avatarUrl, name, questionsMade, created, totalPoints);
    }),
  ];
  ///////////////////////////////////////
  return (
    <div>
      {userLoggedIn && <Nav />}
      <Container>
        <Box
          sx={{
            marginTop: "10rem",
          }}
        >
          <Typography variant="h2" component="div" gutterBottom>
            Leaderboards
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            User leaderboards
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>User Avatars</TableCell>
                  <TableCell align="right">Username</TableCell>
                  <TableCell align="right">Answered</TableCell>
                  <TableCell align="right">Created</TableCell>
                  <TableCell align="right">Total points</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .sort((a, b) => b.totalPoints - a.totalPoints)
                  .map((row) => (
                    <TableRow
                      key={row?.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Avatar alt="user" src={row?.avatarUrl} />
                      </TableCell>
                      <TableCell align="right">{row?.name}</TableCell>
                      <TableCell align="right">{row?.questionsMade}</TableCell>
                      <TableCell align="right">{row?.created}</TableCell>
                      <TableCell align="right">{row?.totalPoints}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </div>
  );
}

export default Leaderboard;
