import { useParams } from "react-router-dom";
import { useGetAllShowDataQuery } from "../api/LightApi";

const LoadShow = () => {
  const { id } = useParams();
  const { data: showData, isLoading, isError } = useGetAllShowDataQuery(id);

  if (isLoading) {
    return <div>Loading show data...</div>;
  }

  if (isError) {
    return <div>Error loading show data. Please try again later.</div>;
  }

  console.log(showData);
  return (
    <div>
      <h1>Show Details</h1>
      {showData ? <div></div> : <p>No show data available.</p>}
    </div>
  );
};

export default LoadShow;
