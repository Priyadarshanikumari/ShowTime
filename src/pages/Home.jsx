import React,{useState} from "react";
import movies from "../data/movies";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function Home(){

const [searchTerm,setSearchTerm]=useState("");

const filteredMovies=movies.filter((movie)=>
movie.title.toLowerCase().includes(searchTerm.toLowerCase())
);

return(
<div className="home-page">

<Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

<main className="home-content">

<h1>Recommended Movies</h1>

<div className="movies">
{filteredMovies.length>0
?filteredMovies.map((movie)=><MovieCard key={movie.id} movie={movie}/>)
:<h2>No Movie Found</h2>}
</div>

</main>

<Footer/>

</div>
);
}

export default Home;