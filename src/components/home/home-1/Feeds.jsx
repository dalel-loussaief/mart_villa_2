import { feeds } from "../../../data/dummyData";
import SingleFeedCardGrid from "../../common/page-componets/SingleFeedCardGrid";
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
      <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
        {/* {feeds.slice(0, 4).map((feed) => (
          <SingleFeedCardGrid key={feed.id} {...feed} />
        ))} */}
         {blogs.slice(0, 4).map((blog) => (
            <SingleFeedCardGrid key={blog.id} {...blog} />
          ))}
      </div>
    </div>
  );
};

export default Feeds;