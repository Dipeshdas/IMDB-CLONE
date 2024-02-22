
import "./App.css";
import { Banner } from "./Components/Banner";
import { Movies } from "./Components/Movies";
import { Navbar } from "./Components/Navbar";
import { WatchList } from "./Components/WatchList";
import { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  let [watchlist,SetWatchList]=useState([]);

  
  const addToWatchList=(movieObj)=>{
    let newWatchList=[...watchlist,movieObj];
    localStorage.setItem('movieData',JSON.stringify(newWatchList))
    SetWatchList(newWatchList);
    // console.log(newWatchList);
  }

  const removeFromWatchList=(movieObj)=>{
    let filterWatchList=watchlist.filter((movie)=>{
      return movie.id!==movieObj.id;
    })
    localStorage.setItem('movieData',JSON.stringify(filterWatchList))
    SetWatchList(filterWatchList);
    // console.log(filterWatchList);
  }

  useEffect(()=>{
    let movieFromLocalStorage=localStorage.getItem('movieData');
    if(!movieFromLocalStorage){
      return;
    }
    SetWatchList(JSON.parse( movieFromLocalStorage));
  },[])
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                
                <Banner watchlist={watchlist}/> <Movies watchlist={watchlist} addToWatchList={addToWatchList} removeFromWatchList={removeFromWatchList}/>
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList watchlist={watchlist} removeFromWatchList={removeFromWatchList} SetWatchList={SetWatchList}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
