import React, { useState, useEffect } from 'react';
import Film from './Film';

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
  U: `A U-rated film is likely to be suitable for audiences aged four years and over, although it is impossible to predict what might upset any particular child. U films should be set within a positive framework and should offer reassuring counterbalances to any violence, threat or horror that might exist.`,
  PG: `A PG-rated film might feature scenes unsuitable for young children, though it should not unsettle a child aged around eight or older. Unaccompanied children of any age may watch a film like this, but parents are advised to consider whether the content may upset younger, or more sensitive, children.`,
  12: `A 12 or 12A-rated film contain material that is not generally suitable for children aged under 12. The 12A rating is given to films when they are displayed in a cinema, and mean that no one younger than 12 may see this unless accompanied by an adult. Adults planning to take a child under 12 to view a 12A film should consider whether the film is suitable for that child, and the BBFC provide ratings information to help adults decide. No one younger than 12 may rent or buy a 12 rated video work.`,
  15: `A 15-rated film is likely to contain content that is unsuitable for younger children, and so no one younger than 15 may see one of these films in a cinema, or rent or buy a 15-rated video work.`,
  18: `An 18-rated film is considered to be unsuitable for children, and so no one younger than 18 may see an 18 film in a cinema. In addition to this, no one younger than 18 may rent or buy an 18 rated video work. However, the BBFC say that adults should be free to choose their own entertainment.`
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
    console.log(`The last item is ${ratedCategoryLastItem}`);
    } else if (ratedCategories.length > 1) {
      ratedCategoryLastItem.push(`and ${ratedCategories.splice(-1)}`);
      console.log(`There is more than one item and it is ${ratedCategoryLastItem}`);
      } else {
      console.log(`The other condition`); 
    }
  }, [ratingsList, finalAgeRating, answers]);

    return (
        <>
          <div className="app d-flex flex-column">
            <div className="ratings-final align-items-center">
              {(finalAgeRating || finalAgeRating === 0) ? (

                <div className="ratings-content">
                  <img src={`/img/icon-${ratingsList[finalAgeRating]}.svg`} alt="Final film rating icon" />
                  <div className="ratings-title">
                    <h2>Your film is a <span style={{color: ratingColor}}>{ratingsList[finalAgeRating]}-rated</span> film</h2>
                    <p>
                    {ratingDescription[`${ratingsList[finalAgeRating]}`]}
                    </p>
                    
                      {ratedCategoryList.length !== 0 ? (
                        <p>
                        Your film has been rated this way because it features <span style={{color: ratingColor, fontWeight: 900}}>{ratedCategoryList} {ratedCategoryLastItem}</span> deemed appropriate for an audience of this age.
                        </p>) : (
                          <p>
                            Please while we load your rating information...
                          </p>
                        )}
                  
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
            <h3>Other <span style={{color: ratingColor}}>{ratingsList[finalAgeRating]}-rated</span> Films</h3>
            <div className="film-items">

              {filmData.slice(0, 3).map((film, index) => (
              <Film key={`${index}-${film.original_title}`} film={film} />
              ))}

            </div>
            </>
            : (
              <p>Please wait...</p>
            )}
          </div>
        </>
    )
}

export default FinalRating;
