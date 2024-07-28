import React from "react";
import { useParams } from "react-router-dom";
import { useGetLightsBySetIdQuery } from "../api/LightApi"; // Update the path as necessary

const SetLights = () => {
  const { setId } = useParams(); // Extract setId from URL parameters
  console.log(setId);
  // Use the custom hook to fetch lights based on the setId
  const { data: lights, error, isLoading } = useGetLightsBySetIdQuery(setId);

  if (isLoading) {
    return <p>Loading lights...</p>;
  }

  if (error) {
    return <p>Error loading lights: {error.message}</p>;
  }

  return (
    <div>
      <h1>Lights for Set ID: {setId}</h1>
      {lights && lights.length > 0 ? (
        <ul>
          {lights.map((light) => (
            <li key={light.id}>
              <p>Light Type: {light.lightType}</p>
              <p>Address: {light.address}</p>
              <p>Mode: {light.mode}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No lights found for this set.</p>
      )}
    </div>
  );
};

export default SetLights;
