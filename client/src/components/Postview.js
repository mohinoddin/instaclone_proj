import Post from './Post';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Postview.css';
export default function PostView() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://instaclone-backend-proj.herokuapp.com/posts"); /////fetching data through server
      console.log(response)
      const data = await response.json(); /////converting fetched data to json file extention
      setPosts(data);
      // console.log(data);
    }
    fetchData()
  }, [])


  return (
    <div className="site-container">

      <Navbar />
      {posts.map((post, index) => (
        <Post key={index} details={post} />
      ))}
    </div>
  );
}
