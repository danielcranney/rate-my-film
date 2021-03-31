import React from 'react'

const Film = ( { film }) => {
    console.log(film)
    return (
        <div className="item">
                <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={`${film.original_title} Poster`} />
                <h5 className="info-item">{film.original_title} ({film.release_date.substr(0,4)})</h5>
                <p>{film.overview.substr(0,200)}...</p>
              </div>
    )
}
export default Film;