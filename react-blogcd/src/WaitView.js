import React from 'react';

function WaitView({ movies, handleFavorite }) {
  return (
    <div>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-4 mb-3">
            <img src={movie.i.imageUrl} alt="" height="90%" width="100%" />
            <h4 className="text-center">{movie.l}</h4>
            <button className="btn btn-primary" onClick={handleFavorite}>
              Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export { WaitView };
