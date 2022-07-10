import { screen, fireEvent } from "@testing-library/react";
import { reduxWrapper } from "../tests/testHelpers";
import { store } from "../tests/mockStore/store";
import CreatePoll from "../../components/CreatePoll";

describe("CreatePoll", () => {
  it("Create poll should render correctly", () => {
    reduxWrapper(<CreatePoll />, store);
    expect(screen.getByText(/would you rather?/i)).toBeInTheDocument();
    expect(screen.getByText(/option one/i)).toBeInTheDocument();
    expect(screen.getByText(/option two/i)).toBeInTheDocument();
    expect(screen.getByText(/^create$/i)).toBeInTheDocument();
    ////////////////////////////////////////////////////////////////////////////////
  });
});
