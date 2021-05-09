import React, { useState, useEffect } from 'react';
import Film from './Film';

import { ReactComponent as RatingGraphic } from './images/rating-graphic.svg';

let ratedCategories = [];
let ratedCategoryList = []
let ratedCategoryLastItem = [];

function search(objectItem, answersArray){
  for (var i = 0; i < answersArray.length; i++) {
      if (answersArray[i].categoryRating === objectItem) {
        ratedCategories.push(answersArray[i].categoryTitle.toLowerCase());
      }
  }
}

const ratingDescription = {
  U: `Films like yours should be suitable for audiences of any age. Even though films like yours might feature some very light violence, threat or horror, they often contain a positive ending.`,
  PG: `Films like yours might contain some scenes that are unsuitable for young children, but are generally acceptable for children eight years or older. Children can generally watch films like this on their own, but parents should think about whether it could be upsetting for more sensitive, children.`,
  12: `Films like yours are not generally suitable for younger children (approximately under 12). They may contain some mild violence, threat or horror, bad language or other content that may upset a younger child, but not a significant amount.`,
  15: `Films like yours contain content that is unsuitable for viewers in their early-teens (13 or 14) because they might contain content that could upset younger viewers. Films like this are not adult-only, so teenagers may be under the age of 18.`,
  18: `Films like yours are unsuitable for anyone that is under the age of 18, should only be viewed by adults. These kinds of films contain more extreme content.`
}

const FinalRating = ( { finalAgeRating, ratingColor, ratingsList, answers }) => {

  const [filmData, setFilmData] = useState(null);

  const filmListUrl = `https://api.themoviedb.org/3/discover/movie?api_key=8af1272c35921dca7a2a0cba4b65f165&certification_country=GB&certification=${ratingsList[finalAgeRating]}&with_original_language=en&sort_by=revenue.desc`;
  
  useEffect(() => {
    const getFilmData = async () => {
      const response = await fetch(filmListUrl);
      const jsonData = await response.json();
      setFilmData(jsonData.results);
    };

    getFilmData();
  }, [filmListUrl]);

  useEffect(() => {
    search(ratingsList[finalAgeRating], answers);

    ratedCategoryList.push(ratedCategories.slice(0, -1).join(", "));

    if (ratedCategories.length === 1) {
    ratedCategoryLastItem.push(`${ratedCategories.splice(-1)}`);
    } else if (ratedCategories.length > 1) {
    ratedCategoryLastItem.push(`and ${ratedCategories.splice(-1)}`);
    } else {
    console.log(`No conditions have been met`); 
    }
  }, [ratingsList, finalAgeRating, answers]);

    return (
      <main className="main-wrapper column">
          <div className="content-box column">
            <div className="rating-section">
              {(finalAgeRating || finalAgeRating === 0) ? (

                <>
                  <div className="icon">
                  <RatingGraphic />
                  </div>
                  
                  <div className="title">
                    <h2>Your film is suitable for <span style={{color: ratingColor}}>
                    {
                      (ratingsList[finalAgeRating] === "U") ? "people of any age" : 
                      (ratingsList[finalAgeRating] === "PG") ? "children" : 
                      (ratingsList[finalAgeRating] === "12") ? "older children" : 
                      (ratingsList[finalAgeRating] === "15") ? "teenagers" : 
                      (ratingsList[finalAgeRating] === "18") ? "adults" : 
                      null
                    }
                    
                    </span></h2>
                    <p>
                    {ratingDescription[`${ratingsList[finalAgeRating]}`]}
                    </p>
                    
                      {ratedCategoryList.length !== 0 ? (
                        <p>
                        Your film has been rated this way because it features <span style={{color: ratingColor, fontWeight: 700}}>{ratedCategoryList} {ratedCategoryLastItem}</span> deemed appropriate for this audience.
                        </p>) : (
                          <p>
                            Please while we load your rating information...
                          </p>
                        )}
                  
                  </div>
                </>
              ) : (
                <>
                </>
              )}
            </div>
          </div>

          {/* <div className="content-box mb-30">
            <div className="category-section">
                <h3>Ratings by Category</h3>
                <div className="category-item-container">
                  {answers.map((answer, i) => (
                    <div key={i} className="category-item">

                    {
                    (answer.categoryRating === "U") ?
                    ( <AnyAgeIcon />) : 
                    (answer.categoryRating === "PG") ?
                    ( <ChildrenWithParentsIcon />) : 
                    (answer.categoryRating === "12") ?
                    ( <OlderChildrenIcon />) : 
                    (answer.categoryRating === "15") ?
                    ( <TeenagersIcon />) : 
                    (answer.categoryRating === "18") ?
                    ( <AdultsIcon />) : 
                    null
                    }

                        <p>{answer.categoryTitle}</p>
                    </div>
                  ))}
                </div>
            </div>
          </div> */}

          <div className="content-box">
            <div className="other-films-section">
              { filmData ? 
              <>
              <h2>Other films suitable for <span style={{color: ratingColor}}>{
                (ratingsList[finalAgeRating] === "U") ? "people of any age" : 
                (ratingsList[finalAgeRating] === "PG") ? "children" : 
                (ratingsList[finalAgeRating] === "12") ? "older children" : 
                (ratingsList[finalAgeRating] === "15") ? "teenagers" : 
                (ratingsList[finalAgeRating] === "18") ? "adults" : 
                null
              }</span></h2>
              
              <div className="items">

                {filmData.slice(0, 6).map((film, index) => (
                <Film key={`${index}-${film.original_title}`} film={film} ratingColor={ratingColor} />
                ))}

              </div>
              </>
              : (
                <p>Please wait...</p>
              )}
            </div>
          </div>

          <div className="content-box column start-again">
          <button onClick={(e) => { e.preventDefault(); window.location.reload() }} className="start-button">Start Again</button>
          </div>
        </main>
    )
}

export default FinalRating;
