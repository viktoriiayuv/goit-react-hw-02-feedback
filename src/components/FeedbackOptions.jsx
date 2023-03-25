import { FeedbackOptionsList } from './App.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsList>
      {options.map(option => (
        <li key={option}>
          <button
            className="feedbackBtn"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </FeedbackOptionsList>
  );
};

export default FeedbackOptions;
