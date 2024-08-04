import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCreateInputMutation } from "../api/LightApi";
import { useNavigate } from "react-router-dom";

const LoadFile = () => {
  const location = useLocation();
  const file = location.state && location.state.fileData;
  const [newInput] = useCreateInputMutation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      console.log("File:", file);
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        try {
          const response = await newInput(formData);

          if (response.status === 201) {
            console.log("good response");
            navigate("/");
          } else {
            console.error("Error occurred:", response.error);
            // need to work on logic to show what lights failed if any then navigate home once acknowledged
            navigate("/");
          }
        } catch (error) {
          console.error("Error occurred:", error);
        }
      }
    };
    fetchData();
  }, [file, newInput, navigate]);

  return (
    <div>
      <h1>Loading File...</h1>
    </div>
  );
};

export default LoadFile;
