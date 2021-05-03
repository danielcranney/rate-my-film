import React, { useEffect, useCallback, useState } from 'react';

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return "active";
  } else if (indexes.nextIndex === cardIndex) {
    return "next";
  } else if (indexes.previousIndex === cardIndex) {
    return "prev";
  }
  return "inactive";
}

const Questions = ({ topics, handleAnswerOptionClick, i, currentTopic }) => {

  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1
  });

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= topics.length - 1) {
      setIndexes({
        previousIndex: topics.length - 1,
        currentIndex: 0,
        nextIndex: 1
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === topics.length
            ? 0
            : prevState.currentIndex + 2
      }));
    }
  }, [indexes.currentIndex]);

    return (
      <>
      <ul className="topic-card-carousel">
      {topics.map((topic, index) => (
        <li key={topic.id}
            className={`topic-card ${determineClasses(indexes, index)}`}
            // onClick={}
            >
            <div className="question-section" style={{ borderColor: topic.color }}>
              <div className="question-icon" style={{ backgroundColor: topic.color }}>
                {topic.icon}
              </div>
              <div className="question-title">
                <h2>{topic.categoryTitle}</h2>
                <div className="question-count">
                  Step {topic.id + 1} of {topics.length}
                </div>
              </div>
              
            </div>

            <div>
                <p className="question-description">{topic.categoryDescription}</p>
              </div>

            <div className="answer-section d-flex">
            
              {topic.answerOptions.map((answerOption) => (
                <div className="answer-item">
                  <button
                    onClick={() => {
                      handleAnswerOptionClick(
                        answerOption.ageRating,
                        topic.categoryTitle
                      )
                      handleCardTransition()
                    }
                    }
                    key={i++}
                  >
                    <span className="d-flex align-items-center">
                      {answerOption.answerText}
                    </span>
                  </button>
                </div>
              ))}

            </div>
          </li>
      ))}
      </ul>
      </>
    )
}

export default Questions;