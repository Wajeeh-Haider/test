import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <>
      {data?.map((item) => {
        const { title, abstract, multimedia, uri } = item;
        const link = item.title.split(" ").join("-");
        return (
          <Link
            to={`/story/${link}`}
            className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={uri}
          >
            <img
              className="rounded-t-lg h-56 w-full object-cover"
              src={multimedia[0].url}
              alt="multimediaImage"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {abstract.length > 150
                  ? abstract.slice(0, 150) + "..."
                  : abstract}
              </p>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Card;
