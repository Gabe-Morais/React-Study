import { useState, useEffect } from "react";

// 4 - custom hook

export const useFetch = (url) => {
  // data from the api, initially null
  const [data, setData] = useState(null);

  // 5 - refatorando POST
  const [config, setConfig] = useState(null); // for headers
  const [method, setMethod] = useState(null); //GET or POST or DELETE
  const [callFetch, setCallFetch] = useState(false);

  // 6 - loading
  const [loading, setLoading] = useState(false);

  // errors
  const [error, setError] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else if (method === "DELETE") {
      setConfig(fetch(data, { method: method }));
    }
    setMethod(method);
    // when setConfig, activate useEffect to reload the list.
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        const json = await res.json();

        // add fetched data to states
        setData(json);
      } catch (error) {
        console.log(error.message);
        setError("Houve um problema ao carregar os dados!");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);
  //  5 - Refatorando POST
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST" || method === "DELETE") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json);
      }
    };

    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, error };
};
