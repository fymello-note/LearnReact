import { useEffect, useState } from "react"
import MovieDataService from "../services/movies";

export default function MovieList(props){

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        retriveMovies();
    }, []);

    function retriveMovies(){
        MovieDataService.getAll().then(response => {
            console.log(response.data);
            setMovies(response.data)
        });
    }

    return (
        <>
            <div className="App">
                We have {movies.length} movies!
            </div>
        </>
    )
}