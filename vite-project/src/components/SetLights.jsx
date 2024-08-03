import { useParams } from "react-router-dom";
import { useGetLightsBySetIdQuery } from "../api/LightApi";

const SetLights = () => {
  const { setId } = useParams();

  const { data: lights, error, isLoading } = useGetLightsBySetIdQuery(setId);
  console.log(lights);
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
              <p>Show: {light.show.name}</p>
              <p>Set: {light.set.set}</p>
              <p>Location: {light.set.location}</p>
              <p>Fixture Number: {light.fixtureNumber}</p>
              <p>Universe: {light.universe.universeId}</p>
              <p>Address: {light.address}</p>
              <p>Mode: {light.mode}</p>
              <p>Notes: {light.notes}</p>
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
