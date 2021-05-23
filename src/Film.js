import React from 'react'

const Film = ( { film, ratingColor }) => {
    
    // console.log(film)

    return (
        <div className="item">
                <div className="image">
                    <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={`${film.original_title} Poster`} />
                </div>
                <div className="info">
                    <h4 style={{color: ratingColor}}>{film.original_title} ({film.release_date.substr(0,4)})</h4>
                    <p>{film.overview.substr(0,180)}...</p>
                </div>
              </div>
    )
}
export default Film;