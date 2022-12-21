import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const userNoparse = localStorage.getItem("user");
  const user = JSON.parse(userNoparse);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      axios.post(`http://localhost:3001/api/users/me`, { token });
    }
  });

  const handdleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          <div className="collapse navbar-collapse ms-5" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"}>
                  <p className="nav-link text-light">
                    Tất cả phim
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            {user ? (
              <>
                  <button
                    className="btn btn-danger m-3"
                    type="button"
                  >
                  {(user.name + " " + user.lastname)}
                  </button>
                   <Link className="btn btn-warning" to="/favorites">
                      <button className="dropdown-item">Phim của tôi</button>
                    </Link>
                    <button className="m-3 btn btn-primary" onClick={handdleLogout}>
                      Đăng xuất
                    </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn btn-outline-danger" type="submit">
                    Đăng nhập
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
