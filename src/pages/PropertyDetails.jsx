import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import { Featured } from "../components/common/page-componets";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [rdvData, setRdvData] = useState({
    fullname: "",
    email: "",
    phone: "",
    date: formatDate(new Date())  
  });

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/userAuth/property-detail/${id}/`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };
    fetchProperty();
  }, [id]);

  useEffect(() => {
    // Vérifier si l'email de l'utilisateur est stocké dans le localStorage
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      // Si l'email existe, le mettre à jour dans l'état
      setRdvData(prevState => ({
        ...prevState,
        email: userEmail
      }));
    }
  }, []); // Ce hook ne doit être exécuté qu'une seule fois au chargement du composant

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRdvData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/userAuth/rdv-create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(rdvData)
      });
      console.log(rdvData);
      if (response.ok) {
        toast.success('RDV created successfully!', {
          autoClose: 3000
        });
        setTimeout(() => {
          window.location.href = '/Property';
        }, 3000);
      } else {
        const responseData = await response.json();
        toast.error(responseData.message || 'An error occurred while creating RDV. Please try again.');
      }
    } catch (error) {
      console.error('Error creating RDV:', error);
      toast.error('An error occurred while creating RDV. Please try again.');
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="pt-20 px-[3%] md:px-[6%]">
        {property ? (
          <>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="font-semibold text-lg">
                  {property.property_titre}
                </h1>
              </div>
              <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
                <div className="bg-green-500 text-white px-7 rounded-full text-base font-semibold">
                  {property.property_dispo}
                </div>
                <p className="text-base font-semibold text-violet-600">
                  {property.property_surface} 
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-8 lg:flex-row w-11/12">
              <div className="max-w-[768px]">
                <div className="mb-8 w-full">
                  <img
                    src={`http://localhost:8000/userAuth${property.image}`}
                    style={{ maxWidth: "100%" }}
                    alt={property.property_titre}
                  />
                </div>
                <div className="flex gap-x-6 text-violet-700 mb-6">
                  <div className="flex gap-x-2 items-center">
                  </div>
                </div>
                <div>{property.property_description}</div>
              </div>
              <div className="flex-1 border w-full mb-8 rounded-lg px-6 py-8">
                <div className="flex items-center gap-x-4">
                  <h1>Make an appointment</h1>
                </div>
                <br />
               
                <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
                  <input
                    className="border rounded w-full px-2 h-10 p-4 text-sm bg-inherit focus:border-violet-700"
                    type="text"
                    placeholder="Full Name"
                    name="fullname"
                    value={rdvData.fullname}
                    onChange={handleChange}
                  />
                  <input
                    className="border rounded w-full px-2 p-4 h-10 text-sm bg-inherit focus:border-violet-700"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={rdvData.email}
                    onChange={handleChange}
                  />
                  <input
                    className="border rounded w-full px-2 p-4 h-10 bg-inherit focus:border-violet-700"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={rdvData.phone}
                    onChange={handleChange}
                  />
                  <input
                    className="border rounded w-full px-2 p-4 h-10 bg-inherit focus:border-violet-700"
                    name="date"
                    type="date"
                    value={rdvData.date}
                    onChange={handleChange}
                  />
                  <div className="flex gap-x-2">
                    <button className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition">
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        ) : (
          <p>Property not found</p>
        )}
      </div>
      <div className="px-[3%] md:px-[6%]">
        <Featured />
      </div>
    </>
  );
};

export default PropertyDetails;
