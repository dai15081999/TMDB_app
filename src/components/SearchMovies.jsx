import React, {useMemo} from "react";
import axios from "axios";
import { useState } from "react";
import Card from "../commons/Card";
import { search } from "../request";


const SearchMovies = () => {
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState([]);

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await search(value).then((data) => setMovies(data?.results))
    setValue("");
  };
  
  return (
    <>
      <div
        className="py-2 pt-3 pb-3"
        style={{ paddingLeft: 400, paddingRight: 400 }}
      >
        <h3 className="mb-5">
          Tìm kiếm phim
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Nhập tên phim..."
              className="form-control text-center"
              onChange={handleValue}
              value={value}
            />
          </div>
        </form>
      </div>

      <div className="wrap container-fluid">
        {movies.map((data, i) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </>
  );
};

export default SearchMovies;
