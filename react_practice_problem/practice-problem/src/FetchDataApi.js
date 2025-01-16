import React, { useEffect, useState } from "react";

const FetchDataApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Update state with fetched data
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading even on error
      });
  }, []); // Empty dependency array to ensure this runs only once on mount

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>User List</h2>
          {
            data.map((user) => (
              <div key={user.id}>
                <p>
                  <strong>Id:</strong> {user.id}
                </p>
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default FetchDataApi;
