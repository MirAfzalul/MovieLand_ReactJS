import { useEffect } from "react";
// 954fba15

const API_URL='http://www.omdbapi.com?apikey=954fba15';
const App=()=>{
    const searchMovies=async(title)=>{
        const response= await fetch(`${API_URL}&s=${title}`);
        const data= await response.json();
        console.log(data.Search);
    }
    useEffect(()=>{
        searchMovies("Superman")
    },[]);
    return(
        <h1>App</h1>
    );
}
export default App;