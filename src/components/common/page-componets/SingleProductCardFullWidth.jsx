import { BiMap, BiMapAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import CardLabels from "./CardLabels";
import React, { useState, useEffect } from "react";
import axios from 'axios';


const SingleProductCardFullWidth = ({
  id,
  property_titre,
  property_description,
  property_surface,
  property_dispo,
  property_prix,
  image,
  basis,
  category,
  service


}) => {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/userAuth/Show/');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:8000/userAuth/service-list/');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);


  return (
    <div
      className={`flex-1 ${basis ? basis : "basis-[18rem]"
        } shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group`}
    >
      <div className="group !opacity-100 overflow-hidden relative">
        <Link to="/" className="!opacity-100">
          <img src={`http://localhost:8000/userAuth${image}`} alt={property_titre} className="w-full  h-fit md:h-[250px] object-cover group-hover:scale-125 transition-a" />

        </Link>
        <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
          <div className="text-white flex-align-center gap-x-2">
            <p>{property_description}</p>
          </div>
        </div>
      </div>
      {/* <CardLabels
        purpose={service.type_service}
        category={category.name}
      /> */}
      <CardLabels
        purpose={service}
        category={category}
      />
      <div className="p-3">
        <Link to="/" className="group-hover:text-primary transition-a">
          <h1 className="text-lg font-bold capitalize">{property_titre}</h1>
        </Link>
        <div className="mt-3">
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiMapAlt />
            </div>
            <p className="text-sm">{property_surface}</p>
          </div>
        </div>

        <div className="mt-4 flex-center-between">
          <h1 className="text-lg font-semibold text-primary">${property_prix}</h1>
          <button className="btn btn-secondary">
            <Link to={`/PropertyDetails/${id}`}>details</Link>
          </button>

        </div>
      </div>
    </div>
  );
};

export default SingleProductCardFullWidth;