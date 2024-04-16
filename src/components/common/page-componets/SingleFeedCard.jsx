import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const SingleFeedCard = ({
  id,
  titre,
  date,
  image,
  contenu,
}) => {


  return (
    <div className="flex-1 basis-[18rem] shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group">
      <div className="group !opacity-100 overflow-hidden">
        <Link to={`/bolg/${id}`} className="!opacity-100">
          <img
            src={`http://localhost:8000/userAuth${image}`}
            alt={titre}
            className="w-full rounded-lg h-fit md:h-[200px] object-cover group-hover:scale-125 transition-a"
          />
        </Link>
      </div>
      <div className="absolute top-2 left-2">
        <span className="px-3 py-1 text-white capitalize rounded-full bg-secondary">
          {}
        </span>
      </div>
      <div className="p-3">
        <p className="text-sm uppercase opacity-60">
           {date}
        </p>
        <Link
          to={`/bolg/${id}`}
          className="group-hover:text-primary transition-a"
        >
          <h1 className="text-lg font-semibold capitalize">{titre}</h1>
        </Link>



        <Link   to={`/BlogDetails/${id}`} className="mt-4 flex-align-center gap-x-2 hover:underline text-primary">
          <span className="uppercase hover:underline">read more</span>{" "}
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default SingleFeedCard;