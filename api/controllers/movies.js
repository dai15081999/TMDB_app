const MoviesService = require("../services/movies");
const axios = require("axios");

class MoviesController {
  static async getAll(req, res) {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/550?api_key=b61fac905693b1a1346dfa5b5d790449`
    );

    res.send(data);
  }
}

module.exports = MoviesController;
