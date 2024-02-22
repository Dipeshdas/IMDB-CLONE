import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import axios from "axios";
import { Footer } from "./Footer";

export const Movies = (props) => {

  const {watchlist,addToWatchList,removeFromWatchList}=props
  
  const [movies, SetMovies] = useState([]);
  const[pageNo,SetPageNo]=useState(1);


  const nextPage=()=>{
    SetPageNo(pageNo+1);
  }

  const prevPage=()=>{
    if(pageNo===1){
      SetPageNo(pageNo);
    }else {
    SetPageNo(pageNo-1);
    }
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=d609afabfd2843ea04680df04f05200e&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        SetMovies(res.data.results);
        // console.log(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-4">
      <div className="text-2xl m-2 font-bold text-center">Trending Post</div>

      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movieObj,i) => {
          return <MovieCard watchlist={watchlist} removeFromWatchList={removeFromWatchList} movieObj={movieObj} addToWatchList={addToWatchList} key={i} poster_path={movieObj.poster_path} name={movieObj.original_title}/>;
        })}
      </div>
      <Footer pageNo={pageNo} nextPage={nextPage} prevPage={prevPage}/>
    </div>
  );
};

// https://api.themoviedb.org/3/tv/popular?api_key=d609afabfd2843ea04680df04f05200e&language=en-US&page=1
