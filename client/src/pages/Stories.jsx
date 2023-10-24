import Loader from "../Components/Loader";
import Card from "../Components/Card";
import GetStories from "../hooks/getStories";

const Stories = () => {
  const { stories, loading } = GetStories();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold my-12">Top Stories</h1>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mx-10">
            <Card data={stories} />
          </div>
        </>
      )}
    </>
  );
};

export default Stories;
