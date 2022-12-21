import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Details from "../commons/Details";
import { detailMovie } from "../request";
import { useAsync } from "../useAsync";
const MovieDetails = ({ data }) => {
  const { movieId } = useParams();

  const {loading, error, value: movie} = useAsync(() => detailMovie(movieId), [])

  return (
    <>
      {loading ? "Đang tải" : <Details data={movie} />}
    </>
  );
};

export default MovieDetails;
