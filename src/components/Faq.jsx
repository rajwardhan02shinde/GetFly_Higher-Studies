import QuestionForm from "./QuestionForm";
import FaqContainer from "./FaqContainer";
import { faqData } from "./Data";
import { useState } from "react";

function Faq() {
  const [faqitems, setfaqItems] = useState(faqData);
  const [visibleIndex, setVisibleIndex] = useState(null);
  return (
    <>
      {" "}
      <div className="container mFAQ">
        <div className="perfectMatch">
          <h2>Frequently Asked Questions</h2>
          <p>
            Here are some most Frequently Asked Questions/Doubts and their
            Answers
          </p>
          <div className="line"></div>
          {faqitems.map((faqitem, index) => (
            <FaqContainer
              index={index}
              key={faqitem.id}
              faqitem={faqitem}
              visibleIndex={visibleIndex}
              setVisibleIndex={setVisibleIndex}
            />
          ))}
          <div className="postQuestions">
            {" "}
            <p>Post You Questions/Doubts Now</p>
            <div className="line"></div>
            <div className="container">
              {" "}
              <QuestionForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Faq;
