import axios from "axios";

class MovieDataService {
    getAll(page=0){
        return axios.get('https://localhost:5000/api/v1/movies');
    }
}

export default new MovieDataService();