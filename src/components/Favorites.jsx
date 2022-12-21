import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import { getFavorites, deleteMovie } from "../request";

const Favorites = () => {
  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);
  const [movieFavorite, setMovieFavorite] = useState()
  const navigate = useNavigate();
  
    useEffect(() => {
      if(!user) {
        return navigate('/login')
     }
      getFavorites(user?.id).then(setMovieFavorite)
    }, [movieFavorite])

  
  const removeFavorites = (id) => {
    try {
      deleteMovie({userId: user.id, movieId: id})
      toast.success("Xóa thành công!")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container text-center">
        <h1 className="pt-5">Yêu thích</h1>
        <div className="row">
          {movieFavorite && movieFavorite.map((data, i) => (
            <div className="col-3 mt-5" key={i}>
              <div className="card" style={{ width: "14rem" }}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${data.img}`}
                  className="card-img-top"
                  style={{height: "200px", 'object-fit': "cover"}}
                  alt="..."
                />
                <div className="card-body">
                  <h6 className="card-title">{data.title}</h6>
                  <p className="card-text">
                    {data.description.slice(0, 30) + "..."}
                  </p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFavorites(data.id)}
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
