import React from "react";
const Details = ({ data }) => {
  return (
    <>
      <div className="row p-5">
        <div className="col-4 ">
          <img
            src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="col-8 pt-5 text-center text-light">
          <h1 className="text-warning">{"Tên Phim: " + data?.title}</h1>
          <h5 className="pt-5 text-success">{"Chi tiết:"+data?.overview}</h5>
        </div>
      </div>
    </>
  );
};

export default Details;
