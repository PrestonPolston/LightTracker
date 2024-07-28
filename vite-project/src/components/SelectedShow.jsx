import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import showDataStorage from "../app/sessionStorage.js/showDataStorage";
import { useNavigate } from "react-router-dom";

const SelectedShow = () => {
  const { id } = useParams();
  const [showData, setShowData] = useState(null);
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
    console.log(setId);
  };

  return (
    <div>
      {showData ? (
        <div>
          <h1>{showData.name}</h1>
          <h3>Sets:</h3>
          {showData.sets && showData.sets.length > 0 ? (
            <ul>
              {showData.sets.map((set) => (
                <li
                  key={set.id}
                  onClick={() => handleSetClick(set.id)}
                  style={{ cursor: "pointer" }}
                >
                  <p>Set Name: {set.set}</p>
                  <p>Location: {set.location}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No sets available for this show.</p>
          )}
        </div>
      ) : (
        <p>Loading show data...</p>
      )}
    </div>
  );
};

export default SelectedShow;
