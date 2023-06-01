import React, { useState, useEffect } from 'react';

function BlogList() {
  const API_URL = 'https://online-movie-database.p.rapidapi.com';
  const API_KEY = '1d9eaf0c24msh738a94125ae0308p13cabfjsn31e797ef476c';
  const URL_IMAGE = 'https://www.imdb.com/title/tt4633694/mediaviewer/rm173371392/?ref_=tt_ov_i';
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/list_movies/`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': API_KEY,
        },
      });
      const data = await response.json();
      setBlogs(data.movies);
    };

    fetchData();
  }, []);


  return (
    <div>
      <h1>Blog List</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <img src={URL_IMAGE} alt={blog.title} />
          <p>{blog.description_full}</p>
        </div>
      ))}
    </div>
  );
}

export { BlogList };


