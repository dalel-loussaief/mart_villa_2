import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const nextTestimonials = () => {
    setStartIndex(startIndex + 3);
  };

  const prevTestimonials = () => {
    setStartIndex(startIndex - 3);
  }

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("http://localhost:8000/userAuth/temoinages/");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données.");
        }
        const data = await response.json();
        // Inverser l'ordre des témoignages
        const reversedTestimonials = data.reverse();
        setTestimonials(reversedTestimonials);
      } catch (error) {
        console.error("Erreur lors de la récupération des témoignages :", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">Testimonials</h1>
        <h1 className="heading">what they're saying about our work feedback</h1>
        <div className="flex justify-center mt-4">
        {startIndex > 0 && (
          <button onClick={prevTestimonials} className="btn mr-2">
            <FaChevronLeft /> 
          </button>
        )}
        {startIndex + 3 < testimonials.length && (
          <button onClick={nextTestimonials} className="btn">
             <FaChevronRight />
          </button>
        )}
      </div>
      </div>
         <div className="flex flex-wrap gap-4 mt-8">
        {testimonials.slice(startIndex, startIndex + 3).map((testimonial) => (
          <TestimonialCard {...testimonial} key={testimonial.id} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;