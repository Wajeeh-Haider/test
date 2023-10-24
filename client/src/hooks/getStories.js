import { useEffect, useState } from "react";

const GetStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:4000/api/stories");
      const { results } = await response.json();
      setStories(results);
      setLoading(false);
    };

    getData();
  }, []);

  return { stories, loading };
};

export default GetStories;
