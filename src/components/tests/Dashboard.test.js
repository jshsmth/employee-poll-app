import { screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { reduxWrapper } from "../tests/testHelpers";
import { store } from "../tests/mockStore/store";

describe("Dashboard", () => {
  it("Dashboard should allow user to navigate to view poll", () => {
    reduxWrapper(<App />, store);
    expect(screen.getByText(/unanswered/i)).toBeInTheDocument();
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    const viewPollBtn = screen.getAllByText(/view poll/i);
    fireEvent.click(viewPollBtn[0]);

    ////////////////////////////////////////////////////////////////////////////////
  });
});
