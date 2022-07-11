import { screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { reduxWrapper } from "../tests/testHelpers";
import { store } from "../tests/mockStore/store";

describe("Dashboard", () => {
  it("Dashboard should allow user to navigate to view poll", async () => {
    reduxWrapper(<App />, store);
    expect(screen.getByText(/unanswered/i)).toBeInTheDocument();
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    const pollId = screen.getByText(/xj352vofupe1dqz9emx13r/i);
    await fireEvent.click(pollId);
    screen.findByText(/Would you rather?/i);

    ////////////////////////////////////////////////////////////////////////////////
  });
});
