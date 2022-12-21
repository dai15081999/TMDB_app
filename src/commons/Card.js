import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast'
import { addMovie } from "../request";


const Card = ({ data }) => {
  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);

  const addFavorites = async (data) => {
    try {
      if(!user) {
        toast.error("Bạn chưa đăng nhập!")
        return
      }
      await addMovie({userId: user.id, movie: data})
      toast.success("Thêm thành công!")
    } catch (error) {
      toast.error("Lỗi xảy ra!")
    }
  
  };

  return (
    <div className="wrap" key={data.id}>
      <div className="card " style={{ width: "12rem" }}>
        <Link to={`/movieDetails/${data.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            className="card-img-top"
            style={{height: "200px", 'object-fit': "cover"}}
            alt="..."
          />
        </Link>
        <div className="card-body">
          <h6 className="card-title">{data.original_title}</h6>
          <p className="card-text">{data.overview.slice(0, 30) + "..."}</p>
          <button
            className="btn btn-primary"
            onClick={() => addFavorites(data)}
          >
            Thêm vào danh sách
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
