import { useEffect } from "react";
import './app.css'
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
// 954fba15

const API_URL='http://www.omdbapi.com?apikey=954fba15';
const App=()=>{
    const searchMovies=async(title)=>{
        const response= await fetch(`${API_URL}&s=${title}`);
        const data= await response.json();
        console.log(data.Search);
    }
    const movie1={
        "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
        "Year": "2016",
        "imdbID": "tt18689424",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2I4OTllM2MtMWVhNC00MjkzLWJlMDUtN2FhMGQ2ZGVjMjllXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
    }
    useEffect(()=>{
        searchMovies("Superman")
    },[]);
    return(
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input placeholder="Search for movies" 
                value="superman"
                onChange={()=>{}}/>
                <img src={SearchIcon}
                alt="search"
                onClick={()=>{}}
                />
                </div>  
                <div className="container">
                    <MovieCard movie1={movie1}/>
                </div>
                  
        </div>
        
    );
}
export default App;