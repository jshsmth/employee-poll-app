import { screen } from "@testing-library/react";
import ChooseUser from "../ChooseUser";
import { store } from "../../store/store";
import { reduxWrapper } from "../tests/testHelpers";
import App from "../App";

describe("ChooseUser Page", () => {
  it("Should display the choose user page correctly", () => {
    reduxWrapper(<App />, store);
    expect(screen.getByText("Employee poll app")).toBeInTheDocument();
    expect(screen.getByText("User Avatars")).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("Questions created")).toBeInTheDocument();
    expect(screen.getByText("Passwords")).toBeInTheDocument();
    ////////////////////////////////////////////////////////////////////////////////
  });
  it("Should match snapshot", () => {
    expect(<ChooseUser />).toMatchSnapshot();
  });
});
