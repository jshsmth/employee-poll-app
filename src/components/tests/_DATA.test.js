// editor.action.inlineSuggest.trigger
import { _saveQuestion } from "../../store/_DATA";
import { _saveQuestionAnswer } from "../../store/_DATA";

const createPoll = {
  optionOneText: "Jest",
  optionTwoText: "Mocha",
  author: "jest-123",
};

const votePoll = {
  authedUser: "zoshikanlu",
  qid: "loxhs1bqm25b708cmbf3g",
  answer: "optionOne",
};

describe("_saveQuestion", () => {
  it("should save a question to the database", async () => {
    const response = await _saveQuestion(createPoll);
    expect(response?.author).toEqual(createPoll?.author);
    expect(response?.optionOneText?.text).toEqual(
      createPoll?.optionOneText?.text
    );
    expect(response?.optionTwoText?.text).toEqual(
      createPoll?.optionTwoText?.text
    );
  });
  it("should throw error if wrong format", async () => {
    // _saveQuestion should throw error when empty or missing fields
    expect.assertions(1);
    try {
      await _saveQuestion({});
    } catch (error) {
      console.log(error);
      expect(error).toBeTruthy();
    }
  });
});

describe("_saveQuestionAnswer", () => {
  it("should save a vote to the database", async () => {
    const response = await _saveQuestionAnswer(votePoll);
    expect(response).toEqual(true);
  });
  it("should not save vote to the database if wrong format", async () => {
    expect.assertions(1);
    try {
      await _saveQuestionAnswer({});
    } catch (error) {
      console.log(error);
      expect(error).toBeTruthy();
    }
  });
});
