import React from 'react'

function Movie({match,data}) {
    var movie= data.find(p => p.id == match.params.id);
    var movieData;

    if(movie)
    movieData = <div>
      <h3> {movie.title} </h3>
      <p>{movie.description}</p>
      <hr/>
      <div className="embed-responsive embed-responsive-21by9">
  <iframe className="embed-responsive-item" src={movie.videoUrl} allowfullscreen></iframe>
</div>
      <h4></h4>  </div>;
  else
  movieData = <h2> Sorry. Product doesnt exist </h2>;

  return (
    <div>
      <div>
         {movieData}
      </div>
    </div>
  )
}

export default Movie;
