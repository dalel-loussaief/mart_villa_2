import ReactStars from "react-rating-stars-component";
import { FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({ contenu, name, note }) => {
  return (
    <div className="card flex-1 basis-[16rem] relative">
      <div className="absolute opacity-10 text-9xl top-0 left-0">
        <FaQuoteRight />
      </div>
      <p>{contenu}</p>
      <div className="mt-3 flex gap-x-3">
        <div>
          <h1 className="font-semibold capitalize">{name}</h1>
          <div className="mt-3">
            <ReactStars
              size={18}
              isHalf={true}
              activeColor="#ffd700"
              value={note}
              edit={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;