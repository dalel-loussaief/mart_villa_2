import { useSelector } from "react-redux";
import { dataStore } from "../../../features/dataSlice";
import SingleFeedCard from "./SingleFeedCard";
import React, { useState, useEffect } from "react";


const BlogPostsList = ({basis}) => {
//   const { currentDataItems } = useSelector(dataStore);
//   return (
//     <div className="flex flex-wrap gap-4">
//       {currentDataItems.slice(0, 6).map((feed) => (
        
//         <SingleFeedCard key={feed.id} {...feed} />
//       ))}
//     </div>
//   );
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
       <div className="flex flex-wrap gap-4">
      {/* //{currentDataItems.slice(0, 6).map((feed) => (
            
    //         <SingleFeedCard key={feed.id} {...feed} />
    //       ))} */}
  {blogs.map((blog) => (
            <SingleFeedCard key={blog.id} {...blog} />
          ))}
        </div>
  );
 };

export default BlogPostsList;