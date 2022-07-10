import { screen } from "@testing-library/react";
import ViewPoll from "../ViewPoll";
import { reduxWrapper } from "../tests/testHelpers";
import { store } from "../tests/mockStore/store";

describe("ViewPoll", () => {
  it("Should be able to create poll", () => {
    reduxWrapper(<ViewPoll />, store);
    expect(screen.getByText("Would you rather?")).toBeInTheDocument();
    expect(screen.getAllByText(/percentage/i)).toHaveLength(2);
    expect(screen.getAllByText(/vote/i)).toHaveLength(4);
    expect(screen.getByText("Poll by")).toBeInTheDocument();
    ////////////////////////////////////////////////////////////////////////////////
  });
  it("Should match snapshot", () => {
    expect(ViewPoll).toMatchSnapshot();
  });
});
