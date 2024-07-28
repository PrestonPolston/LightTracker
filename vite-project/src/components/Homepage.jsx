import { useGetShowQuery } from "../api/LightApi";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { data: shows, isLoading, isError } = useGetShowQuery();
  const navigate = useNavigate();
  if (isLoading) {
    return <div>Loading shows...</div>;
  }

  if (isError) {
    return <div>Error loading shows. Please try again later.</div>;
  }

  const handleShowClick = (id) => {
    navigate(`/show/${id}`);
  };

  return (
    <div>
      <h1>Shows</h1>
      {shows && shows.length > 0 ? (
        <ul>
          {shows.map((show) => (
            <li
              key={show.id}
              onClick={() => handleShowClick(show.id)}
              style={{ cursor: "pointer" }}
            >
              <h3>{show.name}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <p>No shows available.</p>
      )}
    </div>
  );
};

export default HomePage;
