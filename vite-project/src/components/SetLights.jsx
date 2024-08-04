import { useParams } from "react-router-dom";
import { useGetLightsBySetIdQuery } from "../api/LightApi";
import { getUniverseStyle } from "../universeLook";
import { useState } from "react";

const SetLights = () => {
  const { setId } = useParams();
  const {
    data: lightsData,
    error,
    isLoading,
  } = useGetLightsBySetIdQuery(setId);
  const [filter, setFilter] = useState("none"); // State to track the filter option

  if (isLoading) {
    return <p>Loading lights...</p>;
  }

  if (error) {
    return <p>Error loading lights: {error.message}</p>;
  }

  // Function to handle filter change
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Function to sort lights based on selected filter
  const getSortedLights = () => {
    if (!lightsData || !lightsData.lights) return [];

    let sortedLights = [...lightsData.lights]; // Create a copy of the lights array

    if (filter === "fixtureNumberHighToLow") {
      sortedLights.sort((a, b) => b.fixtureNumber - a.fixtureNumber);
    } else if (filter === "fixtureNumberLowToHigh") {
      sortedLights.sort((a, b) => a.fixtureNumber - b.fixtureNumber);
    } else if (filter === "addressHighToLow") {
      sortedLights.sort((a, b) => b.address - a.address);
    } else if (filter === "addressLowToHigh") {
      sortedLights.sort((a, b) => a.address - b.address);
    }

    return sortedLights;
  };

  const sortedLights = getSortedLights();

  return (
    <div>
      <h1>Lights for Set ID: {lightsData.set.set}</h1>

      {/* Filter Options */}
      <div>
        <label>Filter by:</label>
        <select onChange={handleFilterChange}>
          <option value="none">None</option>
          <option value="fixtureNumberHighToLow">
            Fixture Number (High to Low)
          </option>
          <option value="fixtureNumberLowToHigh">
            Fixture Number (Low to High)
          </option>
          <option value="addressHighToLow">Address (High to Low)</option>
          <option value="addressLowToHigh">Address (Low to High)</option>
        </select>
      </div>

      <div className="label-container">
        {sortedLights.length > 0 ? (
          sortedLights.map((light) => {
            // Retrieve universe style based on universe ID
            const universeStyle = getUniverseStyle(light.universe.universeId);

            return (
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
                  <div
                    style={{
                      backgroundColor: universeStyle.primaryColor,
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  >
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
            );
          })
        ) : (
          <p>No lights found for this set.</p>
        )}
      </div>
    </div>
  );
};

export default SetLights;
