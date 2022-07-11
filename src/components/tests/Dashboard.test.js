import { screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { reduxWrapper } from "../tests/testHelpers";
import { store } from "../tests/mockStore/store";
import { act } from "react-dom/test-utils";

describe("Dashboard", () => {
  it("Dashboard should allow user to navigate to view poll", async () => {
    act(() => {
      reduxWrapper(<App />, store);
    });
    expect(screen.getByText(/unanswered/i)).toBeInTheDocument();
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
    await screen.findByText(/xj352vofupe1dqz9emx13r/i);
    fireEvent.click(screen.getByText(/xj352vofupe1dqz9emx13r/i));
    expect(screen.getAllByText(/mtsamis/i)[0]).toBeInTheDocument();
    ////////////////////////////////////////////////////////////////////////////////
  });
});
