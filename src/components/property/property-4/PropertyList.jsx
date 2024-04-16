import React, { useState, useEffect } from "react";
import SingleProductCard from "../../common/page-componets/SingleProductCard";
import Filters from "../../home/home-1/Filters";

const PropertyList = ({ basis }) => {
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
    <div className="pt-20 px-[3%] md:px-[6%]">
      <Filters />
      {error && <p>Error: {error}</p>}
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center mb-7"></div>
        <div className="flex flex-wrap gap-4">
          {properties.map((property) => (
            <SingleProductCard key={property.id} {...property} basis={basis} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;