const axios = require("axios");
const tmdbAPI = "https://api.themoviedb.org/3";
const apiKey = "b61fac905693b1a1346dfa5b5d790449";

class MovieService {
  static async getAll() {
    try {
      const resp = await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=b61fac905693b1a1346dfa5b5d790449`);
      return { error: false, data: resp.data };
    } catch ({ response }) {
      const { error } = response.data;
      console.error(error);
      return { error: true, data: error };
    }
  }
}

module.exports = MovieService;
