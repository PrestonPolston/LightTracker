import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetAllShowDataQuery } from "../api/LightApi";
import showDataStorage from "../app/sessionStorage.js/showDataStorage";
import { selectShow } from "../slice/showDataSlice";

const LoadShow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data: finalShowData,
    isLoading,
    isError,
  } = useGetAllShowDataQuery(id);

  if (isLoading) {
    return <div>Loading show data...</div>;
  }

  if (isError) {
    return <div>Error loading show data. Please try again later.</div>;
  }

  if (finalShowData && finalShowData.id === Number(id)) {
    dispatch(selectShow(finalShowData));
    showDataStorage.saveToSessionStorage("showData", finalShowData);
    navigate(`/selectedShow/${finalShowData.id}`);
    return null;
  }
};

export default LoadShow;
