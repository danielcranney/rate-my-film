import React, { useCallback, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { ShowContentContext } from './Home';

const Questions = ({ topics, handleAnswerOptionClick, i, currentTopic, setCurrentTopic, answers }) => {

  const { setShowContent } = useContext(ShowContentContext);

  // Determine classes when cards are clicked
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

  // Index useState defaults
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1
  });

  // Function to handle card transition
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
  }, [indexes.currentIndex, topics.length]);

  // Function to back a card transition
  const handleBackCardTransition = useCallback(() => {
    // Remove last item from answers list
    answers.pop();
    
    // If we've reached the end, start again from the first card,
    if (indexes.currentIndex >= topics.length + 1) {
      setIndexes({
        previousIndex: topics.length - 1,
        currentIndex: 0,
        nextIndex: 1
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex - 2 === topics.length
        ? 0
        : prevState.currentIndex - 2,
        currentIndex: prevState.currentIndex - 1,
        nextIndex: prevState.currentIndex
      }));
    }
  }, [indexes.currentIndex, topics.length, answers]);
  
    return (
    <>
      <div className="questions-wrapper">

        <ul className="card-carousel">
        {topics.map((topic, index) => (
          <li key={topic.id} className={`card ${determineClasses(indexes, index)}`} >
            { currentTopic !== 0 ? (
            <div className="back-button">
              <button onClick={() => {
                setCurrentTopic(currentTopic - 1)
                handleBackCardTransition()
              }}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Back
              </button>
            </div>
            ) : (
              <div className="back-button">
              <Link to="/" className="block">
              <button onClick={() => {
                setShowContent(false);
              }}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Back
              </button>
              </Link> 
            </div>
            )
            }

            <div className="question-section">

              <div className="icon" style={{ backgroundColor: topic.color }}>
                {topic.icon}
              </div>
              <div className="title">
                <h2 style={{ color: topic.color }}>{topic.categoryTitle}</h2>
                <div className="count">
                  Step {topic.id + 1} of {topics.length}
                </div>
              </div>
              
            </div>

            <div>
                <p className="description">{topic.categoryDescription}</p>
            </div>

            <div className="answer-section">
            
              {topic.answerOptions.map((answerOption) => (
                <div className="item" key={i++}>
                  <button
                    onClick={() => {
                      handleAnswerOptionClick(
                        answerOption.ageRating,
                        topic.categoryTitle
                      )
                      handleCardTransition()
                    }
                    }
                  >
                    
                      {answerOption.answerText}
                    
                  </button>
                </div>
              ))}

            </div>
          </li>
        ))}
        </ul>
      
      </div>
    
    </>
    )
}

export default Questions;