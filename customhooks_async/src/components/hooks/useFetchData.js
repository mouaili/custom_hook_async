import { useState, useEffect } from 'react';

//Custom Hook
const useFetchData = fetchUrlData => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  // Async Func
  const fetchData = async () => {
    try {
      const response = await fetch(fetchUrlData);

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const fetchedData = await response.json();

      console.log(fetchedData);

      setData(fetchedData);
      setIsloading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  //1-Fetch Data
  useEffect(() => {
    fetchData();
  }, [fetchUrlData]);

  //2-Return
  return { data, isLoading };
};

export default useFetchData;
