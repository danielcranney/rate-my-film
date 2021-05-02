import React from 'react';

const Questions = ({ topics, handleAnswerOptionClick, i, currentTopic }) => {

    return (
      <>
      {topics.map((card, index) => (
        <div className="wrapper column">
            <div className="question-section">
              <div className="question-title">
                <h2>{topics[currentTopic].categoryTitle}</h2>
                <div className="question-count">
                  Step {currentTopic + 1} of {topics.length}
                </div>
              </div>
              <div className="question-description">
                <p>{topics[currentTopic].categoryDescription}</p>
              </div>
            </div>
            <div className="answer-section d-flex">
            
              {topics[currentTopic].answerOptions.map((answerOption) => (
                <div className="answer-item">
                  <button
                    onClick={() =>
                      handleAnswerOptionClick(
                        answerOption.ageRating,
                        topics[currentTopic].categoryTitle
                      )
                    }
                    key={i++}
                  >
                    <span className="d-flex align-items-center">
                    <svg height="20" width="20">
                      <circle cx="10" cy="10" r="8" fill="red" />
                    </svg>
                      {answerOption.answerText}
                    </span>
                  </button>
                </div>
              ))}

            </div>
          </div>
      ))}
      </>
    )
}

export default Questions;