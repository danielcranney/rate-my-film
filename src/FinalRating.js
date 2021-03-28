import React, { useState, useEffect } from 'react';
import axios from "axios";

const FinalRating = ( { finalAgeRating, ratingColor, ratingsList, answers }) => {

  const [filmData, setFilmData] = useState({});

  const filmListUrl = `https://api.themoviedb.org/3/discover/movie?api_key=8af1272c35921dca7a2a0cba4b65f165&certification_country=GB&certification=12&with_original_language=en&sort_by=revenue.desc`;

  useEffect(() => {
    const getFilmData = async () => {
      const response = await fetch(filmListUrl);
      const jsonData = await response.json();
      console.log(jsonData.results);
      setFilmData(jsonData.results);
    };

    getFilmData();
  }, []);

    return (
        <>
          <div className="app d-flex flex-column">
            <div className="ratings-final align-items-center">
              {(finalAgeRating || finalAgeRating === 0) ? (

                <div className="ratings-content">
                  <img src={`/img/icon-${ratingsList[finalAgeRating]}.svg`} alt="Final film rating icon" />
                  <div className="ratings-title">
                    <h2>Your film is a <span style={{color: ratingColor}}>{ratingsList[finalAgeRating]}</span> rated film</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat ornare maximus. Praesent porta felis eu tortor facilisis placerat. Phasellus rutrum dapibus auctor. Phasellus vulputate, nisl sit amet elementum imperdiet, metus leo pellentesque turpis, sed fermentum quam nulla quis libero. Ut sit amet orci semper, euismod leo sit amet, bibendum mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              ) : (
                <>
                </>
              )}
            </div>
          </div>

          <div className="app d-flex flex-column">
            <div className="overview-section">
                <h3>Here's the details...</h3>
                <div className="overview-item-container">
                  {answers.map((answer, i) => (
                    <div key={i} className="overview-item">
                      <img src={`/img/icon-${answer.categoryRating}.svg`} alt="" />
                        <p className="d-flex flex-column justify-content-center">{answer.categoryTitle}</p>
                    </div>
                  ))}
                </div>
            </div>
          </div>

          <div className="app d-flex flex-column">

            {/* <h5 className="info-item">{filmData[0].original_title}</h5> */}
            {/* <h5 className="info-item">{filmData.location}</h5>
            <h5 className="info-item">{filmData.blog}</h5>
            <h5 className="info-item">{filmData.company}</h5> */}
          </div>
        </>
    )
}

export default FinalRating;
