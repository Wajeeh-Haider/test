import React from "react";
import GetStories from "../hooks/getStories";
import { useParams } from "react-router";
import Loader from "../Components/Loader";

const SingleStory = () => {
  const { stories, loading } = GetStories();
  const { id } = useParams();
  const story = stories?.find(
    (story) => story.title.split(" ").join("-") === id
  );

  if (!story && !loading)
    return (
      <h1 className="text-center text-5xl text-red-900 my-12">
        Story not found
      </h1>
    );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="py-16 bg-white dark:bg-gray-900 antialiased min-h-screen">
          <div className="flex justify-between px-4 mx-auto ">
            <article className="mx-auto w-full max-w-2xl">
              <header className="mb-4 lg:mb-6">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img
                      className="mr-4 w-16 h-16 rounded-full object-cover"
                      src={story?.multimedia[0].url}
                      alt="author"
                    />
                    <div>
                      <p
                        rel="author"
                        className="text-xl font-bold text-gray-900 dark:text-white"
                      >
                        {story?.title}
                      </p>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        {story?.byline}
                      </p>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        {story?.published_date.split("T")[0]}
                      </p>
                    </div>
                  </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight  text-gray-500 dark:text-gray-400">
                  {story?.item_type}
                </h1>
              </header>
              <p className="lead dark:text-white text-black mb-6">
                {story?.abstract}
              </p>

              <figure>
                <img src={story?.multimedia[1].url} alt="author" />
              </figure>

              <div className="mt-8 mb-16">
                {story?.des_facet.map((item, i) => {
                  return (
                    <span
                      className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-gray-100 mb-2"
                      key={i}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </article>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleStory;
