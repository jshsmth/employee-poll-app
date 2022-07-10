import { screen } from "@testing-library/react";
import ViewPoll from "../ViewPoll";
import { reduxWrapper } from "../tests/testHelpers";

describe("ViewPoll", () => {
  it("Should be able to create poll", () => {
    reduxWrapper(<ViewPoll />);
  });
  it("Should match snapshot", () => {
    expect(ViewPoll).toMatchSnapshot();
  });
});
