import React, { useState } from "react";

function QuestionForm() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setResponse("Your question will be soon replied by our team.");
    setQuestion(""); // Clear input field after submission
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Enter your question:
          <input
            type="text"
            value={question}
            onChange={handleQuestionChange}
            className="input-field"
            placeholder="Enter your question here..."
          />
        </label>
        <div className="button-cover">
          {" "}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
      <div className="response-genrate">
        <p>{response}</p>
      </div>
    </div>
  );
}

export default QuestionForm;
