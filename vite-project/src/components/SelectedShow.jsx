import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import showDataStorage from "../app/sessionStorage.js/showDataStorage";
import SetCard from "../SetCard";

const SelectedShow = () => {
  const { id } = useParams();
  const [showData, setShowData] = useState(null);
  const [filter, setFilter] = useState("none"); // Track the selected filter
  const navigate = useNavigate();

  useEffect(() => {
    const cachedShow = showDataStorage.retrieveFromSessionStorage("showData");

    if (cachedShow && cachedShow.id === Number(id)) {
      console.log("Showing cached show:", cachedShow);
      setShowData(cachedShow);
    } else {
      console.log("No cached show found for ID:", id);
    }
  }, [id]);

  // Function to handle clicking on a set
  const handleSetClick = (setId) => {
    navigate(`/setLights/${setId}`);
  };

  // Function to handle filtering
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Function to get filtered and sorted sets
  const getFilteredSets = () => {
    if (!showData || !showData.sets) return [];

    let filteredSets = showData.sets.filter((set) => set.light.length > 0); // Only include sets with lights

    // Sorting based on the selected filter
    if (filter === "mostLights") {
      filteredSets.sort((a, b) => b.light.length - a.light.length); // Sort by number of lights, most to least
    } else if (filter === "leastLights") {
      filteredSets.sort((a, b) => a.light.length - b.light.length); // Sort by number of lights, least to most
    } else if (filter === "aToZ") {
      filteredSets.sort((a, b) => a.set.localeCompare(b.set)); // Sort alphabetically A-Z
    } else if (filter === "zToA") {
      filteredSets.sort((a, b) => b.set.localeCompare(a.set)); // Sort alphabetically Z-A
    }

    return filteredSets;
  };

  const filteredSets = getFilteredSets();

  return (
    <div className="selected-show">
      {showData ? (
        <div>
          <h1>{showData.name}</h1>
          <h3>Sets:</h3>

          {/* Filter Options */}
          <div>
            <label>Filter by:</label>
            <select onChange={handleFilterChange}>
              <option value="none">None</option>
              <option value="mostLights">Most Lights</option>
              <option value="leastLights">Least Lights</option>
              <option value="aToZ">A-Z</option>
              <option value="zToA">Z-A</option>
            </select>
          </div>

          <div className="sets-container">
            {filteredSets.length > 0 ? (
              filteredSets.map((set) => (
                <SetCard
                  key={set.id}
                  set={set}
                  onClick={() => handleSetClick(set.id)}
                />
              ))
            ) : (
              <p>No sets available for this show.</p>
            )}
          </div>
        </div>
      ) : (
        <p>Loading show data...</p>
      )}
    </div>
  );
};

export default SelectedShow;
