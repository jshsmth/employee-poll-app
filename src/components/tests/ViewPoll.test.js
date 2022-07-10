import { screen, fireEvent } from "@testing-library/react";
import ViewPoll from "../ViewPoll";
import { reduxWrapper } from "../tests/testHelpers";
import App from "../App";

describe("ViewPoll", () => {
  it("Should be able to create poll", () => {
    reduxWrapper(<App />);
    ////////////////////////////////////////////////////////////////////////////////
  });
  it("Should match snapshot", () => {
    expect(ViewPoll).toMatchSnapshot();
  });
});
