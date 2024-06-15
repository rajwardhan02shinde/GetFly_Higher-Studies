import { FaPlus, FaMinus } from "react-icons/fa";
function FaqContainer({ faqitem, visibleIndex, setVisibleIndex, index }) {
  const toggleAnswer = () => {
    // Corrected the toggleAnswer function to toggle visibility based on the current index
    setVisibleIndex(visibleIndex === index ? null : index);
  };
  return (
    <>
      <div className="faq-container">
        <div className="faq-item">
          <div className="faq-question">
            <span>{faqitem.question}</span>
            <button className="faq-symbol" onClick={() => toggleAnswer(index)}>
              {visibleIndex === index ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          {visibleIndex === index && (
            <div className="faq-answer">{faqitem.answer}</div>
          )}
        </div>
      </div>
    </>
  );
}
export default FaqContainer;
