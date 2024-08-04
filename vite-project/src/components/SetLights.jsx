import { useParams } from "react-router-dom";
import { useGetLightsBySetIdQuery } from "../api/LightApi";

const SetLights = () => {
  const { setId } = useParams();

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
      <div className="label-container">
        {lights && lights.length > 0 ? (
          lights.map((light) => (
            <div key={light.id} className="lightLabel">
              <div className="label-header">
                <div className="showKey">{light.show.name}</div>
                <div className="setKey">{light.set.set}</div>
                <div className="locationKey">{light.set.location}</div>
              </div>
              <div className="header-divider"></div>
              <div className="fixture-details">
                <p className="fixtureTypeValue">{light.lightType}</p>
                <p className="fixtureNumberValue">{light.fixtureNumber}</p>
              </div>
              <div className="details">
                <div>
                  <p className="universeKey">Universe:</p>
                  <p className="universeValue">{light.universe.universeId}</p>
                </div>
                <div>
                  <p className="addressKey">Address:</p>
                  <p className="addressValue">{light.address}</p>
                </div>
                <div>
                  <p className="modeKey">Mode:</p>
                  <p className="modeValue">{light.mode}</p>
                </div>
              </div>
              <div className="notesSection">
                <p className="notesKey">Notes:</p>
                <p className="notesValue">{light.notes}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No lights found for this set.</p>
        )}
      </div>
    </div>
  );
};

export default SetLights;
