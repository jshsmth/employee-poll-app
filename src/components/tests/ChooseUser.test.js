import { screen } from "@testing-library/react";
import ChooseUser from "../ChooseUser";
import { store } from "../../store/store";
import { reduxWrapper } from "../tests/testHelpers";
import App from "../App";

describe("ChooseUser Page", () => {
  it("Should display the choose user page correctly", () => {
    reduxWrapper(<App />, store);
    screen.getByText("Employee poll app");
    screen.getByText("User Avatars");
    screen.getByText("Username");
    screen.getByText("Questions created");
    screen.getByText("Passwords");
    ////////////////////////////////////////////////////////////////////////////////
  });
  it("Should match snapshot", () => {
    expect(<ChooseUser />).toMatchSnapshot();
  });
});
