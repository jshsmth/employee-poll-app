import React from "react";
import { addUser } from "../store/userSlice";
import { addQuestions } from "../store/questionSlice";
import { useSelector, useDispatch } from "react-redux";
import { _getUsers, _getQuestions } from "../store/_DATA";
import ChooseUser from "./ChooseUser";

function App() {
  const users = useSelector((state) => state.users);
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  ////////////////////////////////////////////////
  React.useEffect(() => {
    getUsers();
    getQuestions();
    return () => {
      console.log("App pre-populated successfully");
    };
  }, []);
  ////////////////////////////////////////////////

  const getUsers = async () => {
    const response = await _getUsers();
    dispatch(addUser(response));
  };

  const getQuestions = async () => {
    const response = await _getQuestions();
    dispatch(addQuestions(response));
  };

  ////////////////////////////////////////////////
  const allUsers = users?.value;
  const allQuestions = questions?.value;
  ////////////////////////////////////////////////

  return (
    <div className="App">
      <ChooseUser />
    </div>
  );
}

export default App;
