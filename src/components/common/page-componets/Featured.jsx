import { property } from "../../../data/dummyData";
import SingleProductCard from "./SingleProductCard";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";



const Featured = ({basis }) => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

useEffect(() => {
  fetch("http://localhost:8000/userAuth/properties/") // Remplacez l'URL par l'URL de votre API
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    })
    .then((data) => {
      setProperties(data);
    })
    .catch((error) => {
      setError(error.message);
    });
}, []);

  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">featured</h1>
        <div className="flex justify-between items-center">
        <div>
          <h1 className="heading">Explore Featured Latest Properties</h1>
        </div>
        <div>
          <Link to="/property" ><p className="text:lg text-primary">Explore All</p> </Link>
        </div>
      </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        {/* {property.slice(0, 3).map((featured) => (
          <SingleProductCard key={featured.id} {...featured} />
        ))} */}
        {properties.slice(0, 3).map((property) => (
            <SingleProductCard key={property.id} {...property} basis={basis} />
          ))}
      </div>
    </div>
  );
};

export default Featured;