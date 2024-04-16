// import { useSelector } from "react-redux";
// import { dataStore } from "../../../features/dataSlice";
import SingleProductCardFullWidth from "./SingleProductCardFullWidth";
import React, { useState, useEffect } from "react";

const PropertyFullWidth = ({basis }) => {
  // const { currentDataItems } = useSelector(dataStore);
  
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/Property/properties/") // Remplacez l'URL par l'URL de votre API
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
    <div>
      {/* {currentDataItems?.map((property) => (
        <SingleProductCardFullWidth key={property.id} {...property} />
      ))} */}
      {properties.map((property) => (
            <SingleProductCardFullWidth key={property.id} {...property} basis={basis} />
          ))}
    </div>
  );
};

export default PropertyFullWidth;