import { screen } from "@testing-library/react";
import ViewPoll from "../ViewPoll";
import { reduxWrapper } from "../tests/testHelpers";
import { store } from "../tests/mockStore/store";

describe("ViewPoll", () => {
  it("Should be able to create poll", () => {
    reduxWrapper(<ViewPoll />, store);
    expect(screen.getByText(/create poll/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Go back to dashboard/i)[0]).toBeInTheDocument();
    ////////////////////////////////////////////////////////////////////////////////
  });
  it("Should match snapshot", () => {
    expect(ViewPoll).toMatchSnapshot();
  });
});
