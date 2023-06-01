import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { WaitView } from './WaitView';
import { FavoriteView } from './FavoriteView';

function BlogPost() {
  const { id } = useParams();
  const API_URL = 'https://online-movie-database.p.rapidapi.com';
  const API_KEY = '1d9eaf0c24msh738a94125ae0308p13cabfjsn31e797ef476c';
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/movie_details/?movie_id=${id}`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': API_KEY,
        },
      });
      const data = await response.json();
      setBlog(data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  if (isLoading) {
    return <WaitView />;
  }

  return (
    <div>
      <h1>Blog Post</h1>
      <h2>{blog.title}</h2>
      <img src={blog.large_cover_image} alt={blog.title} />
      <p>{blog.description_full}</p>
      <button onClick={handleFavorite}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
      {isFavorite && <FavoriteView />}
    </div>
  );
}

export { BlogPost };

