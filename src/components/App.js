import React from "react";
import { addUser } from "../store/userSlice";
import { addQuestions } from "../store/questionSlice";
import { useSelector, useDispatch } from "react-redux";
import { _getUsers, _getQuestions } from "../store/_DATA";
import Nav from "./Nav";
import ChooseUser from "./ChooseUser";
import Dashboard from "./Dashboard";

function App() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const userLoggedIn = useSelector((state) => state.users.userLoggedIn);

  const getUsers = React.useCallback(async () => {
    const response = await _getUsers();
    dispatch(addUser(response));
  }, [dispatch]);

  const getQuestions = React.useCallback(async () => {
    const response = await _getQuestions();
    dispatch(addQuestions(response));
  }, [dispatch]);

  ////////////////////////////////////////////////
  React.useEffect(() => {
    getUsers();
    getQuestions();
    return () => {
      console.log("App pre-populated successfully");
    };
  }, [getQuestions, getUsers]);
  ////////////////////////////////////////////////

  ////////////////////////////////////////////////
  const allUsers = users?.value;
  ////////////////////////////////////////////////

  return (
    <div className="App">
      {userLoggedIn && <Nav />}
      {userLoggedIn ? <Dashboard /> : <ChooseUser allUsers={allUsers} />}
    </div>
  );
}

export default App;
