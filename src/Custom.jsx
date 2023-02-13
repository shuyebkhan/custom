import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [myData, setData] = useState([]);
  const [isError, setIserror] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((error) => setIserror(error.message));
  }, [url]);

  return [myData, isError];
};

export default useFetch;
