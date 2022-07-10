import { screen } from "@testing-library/react";
import Leaderboards from "../../components/Leaderboard";
import { reduxWrapper } from "../tests/testHelpers";
import { store } from "../tests/mockStore/store";

describe("Leaderboards", () => {
  it("Should render leaderboards table correctly", () => {
    reduxWrapper(<Leaderboards />, store);
    expect(screen.getByText(/^user leaderboards$/i)).toBeInTheDocument();
    expect(screen.getByText("User Avatars")).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText(/created/i)).toBeInTheDocument();
    expect(screen.getByText(/answered/i)).toBeInTheDocument();
    expect(screen.getByText(/total points/i)).toBeInTheDocument();
    ////////////////////////////////////////////////////////////////////////////////
  });
  it("Should match snapshot", () => {
    expect(Leaderboards).toMatchSnapshot();
  });
});
