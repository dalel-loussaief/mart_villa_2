import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { teamMembers } from "../../../data/dummyData";

const Team = () => {
  const [startIndex, setStartIndex] = useState(0); // State pour suivre l'index de départ

  const nextTeam = () => {
    const newIndex = Math.min(startIndex + 4, teamMembers.length - 4);
    setStartIndex(newIndex);
  };

  const prevTeam = () => {
    const newIndex = Math.max(startIndex - 4, 0);
    setStartIndex(newIndex);
  };

  return (
    <div className="pt-10 pb-10 relative">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">our team</h1>
        <h2 className="heading relative">
          <button onClick={prevTeam} className="absolute left-0 top-0 mt-2 flex-align-center gap-x-2 hover:underline text-primary">
            <FiArrowLeft />
            Previous
          </button>
          Meet with our experienced team
          {startIndex + 4 < teamMembers.length && (
            <button onClick={nextTeam} className="absolute right-0 top-0 mt-2 flex-align-center gap-x-2 hover:underline text-primary">
              Next
              <FiArrowRight />
            </button>
          )}
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-3 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.slice(startIndex, startIndex + 4).map(({ id, name, image }) => (
            <div className="h-[250px] w-full mb-16 lg:mb-0" key={id}>
              <img
                src={image}
                alt={name}
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="relative z-10 w-4/5 p-2 mx-auto -mt-10 text-center bg-white rounded-lg shadow-md dark:bg-dark-light">
                <h1 className="text-lg font-semibold">{name}</h1>
              
                <div className="mt-3 flex-center-center gap-x-3">
                  <Link className="hover:text-primary transition-a">
                    <FaFacebook />
                  </Link>
                  <Link className="hover:text-primary transition-a">
                    <FaInstagram />
                  </Link>
                  <Link className="hover:text-primary transition-a">
                    <FaTwitter />
                  </Link>
                  <Link className="hover:text-primary transition-a">
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
