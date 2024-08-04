const SetCard = ({ set, onClick }) => {
  const lightCount = set.light.length;

  // If there are no lights, return null (render nothing)
  if (lightCount === 0) {
    return null; // Render nothing
  }

  // Render set card if there are lights
  return (
    <div className="set-card" onClick={onClick}>
      <h4>Set Name: {set.set}</h4>
      <p>Location: {set.location}</p>
      <p>Number of Lights: {lightCount}</p>
    </div>
  );
};

export default SetCard;
