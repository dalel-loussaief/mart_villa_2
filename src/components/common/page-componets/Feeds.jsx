// import { feeds } from "../../../data/dummyData";
import SingleFeedCard from "./SingleFeedCard";
import React, { useState, useEffect } from "react";

const Feeds = ({basis}) => {

  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/userAuth/blogs/") // Remplacez l'URL par l'URL de votre API
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">blog post</h1>
        <h1 className="heading">latest newsfeeds</h1>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        {/* {feeds.slice(0, 3).map((feed) => (
          <SingleFeedCard key={feed.id} {...feed} />
        ))} */}
          {blogs.slice(0, 4).map((blog) => (
            <SingleFeedCard key={blog.id} {...blog} />
          ))}
      </div>
    </div>
  );
};

export default Feeds;