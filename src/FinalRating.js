import React, { useState, useEffect } from 'react';

const FinalRating = ( { finalAgeRating, ratingColor, ratingsList, answers }) => {

  const [filmData, setFilmData] = useState(null);

  const filmListUrl = `https://api.themoviedb.org/3/discover/movie?api_key=8af1272c35921dca7a2a0cba4b65f165&certification_country=GB&certification=${ratingsList[finalAgeRating]}&with_original_language=en&sort_by=revenue.desc`;

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
                <h3>Ratings by Category</h3>
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
            
            { filmData ? 
            <>
            <h2>Other <span style={{color: ratingColor}}>{ratingsList[finalAgeRating]}</span> Films</h2>
            <div class="film-items">
              <div className="item">
                <img src={`https://image.tmdb.org/t/p/original/${filmData[0].poster_path}`} />
                <h5 className="info-item">{filmData[0].original_title} ({filmData[0].release_date.substr(0,4)})</h5>
                <p>{filmData[0].overview.substr(0,200)}...</p>
              </div>

              <div className="item">
                <img src={`https://image.tmdb.org/t/p/original/${filmData[1].poster_path}`} />
                <h5 className="info-item">{filmData[1].original_title} ({filmData[1].release_date.substr(0,4)})</h5>
                <p>{filmData[1].overview.substr(0,200)}...</p>
              </div>

              <div className="item">
                <img src={`https://image.tmdb.org/t/p/original/${filmData[2].poster_path}`} />
                <h5 className="info-item">{filmData[2].original_title} ({filmData[2].release_date.substr(0,4)})</h5>
                <p>{filmData[2].overview.substr(0,200)}...</p>
              </div>
            </div>
            </>
            : "Not rendered"}
            {/* <h5 className="info-item">{filmData.location}</h5>
            <h5 className="info-item">{filmData.blog}</h5>
            <h5 className="info-item">{filmData.company}</h5> */}
          </div>
        </>
    )
}

export default FinalRating;
