import React , { useState }  from "react";
import { agents } from "../data/dummyData";
import { FaStar } from "react-icons/fa";


const AgentList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter agents based on the search query
  const filterAgents = () => {
    return agents.filter((agent) =>
      agent.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="container p-4 mx-auto space-y-16 sm:p-10">
      <div className="relative mb-4 flex w-9/12 items-stretch pt-20 px-[3%] md:px-[6%]">
        <input
          type="search"
          className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search by name"
          aria-describedby="button-addon2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {filterAgents().map((agent) => (
          <div key={agent.id} className="space-y-4">
            <img
              alt=""
              className="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500"
              src={agent.image}
            />
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-semibold">{agent.name}</h4>
              <div className="flex gap-x-2 items-center">
                  <p className="text-sm dark:text-gray-400">Rating: {agent.rating}</p>
                  <FaStar className="text-yellow-500 ml-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentList;