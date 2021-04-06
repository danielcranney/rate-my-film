import React from 'react'

const Film = ( { film }) => {
    console.log(film)
    return (
        <div className="item">
                <div className="image">
                    <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={`${film.original_title} Poster`} />
                </div>
                <div className="info">
                    <h5 className="info-item">{film.original_title} ({film.release_date.substr(0,4)})</h5>
                    <p className="info-description">{film.overview.substr(0,100)}...</p>
                </div>
              </div>
    )
}
export default Film;