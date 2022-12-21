
import React from "react";
import Card from "../commons/Card";
import { useAsync } from "../useAsync";
import { getMovie } from "../request";

const Populars = () => {
  const {loading, error, value: populars} = useAsync(getMovie, [])
  return (
    <>
     {loading ? "Đang tải..." : (
       <div className="text-center">
       <h1 className="pt-2">Danh sách phim</h1>
       <div className="wrap">
         {populars && populars.results.map((data) => (
           <Card data={data} key={data.id}/>
         ))}
       </div>
     </div>
     )}
    </>
  );
};

export default Populars;
