import React, { useEffect, useState } from "react";
import genre from "../Assets/Genres";

export const WatchList = (props) => {
  const { watchlist, removeFromWatchList, SetWatchList } = props;
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genre"]);
  const [curgenre,setCurGenre]=useState("All Genre");

  const handleCurGenre=(genre)=>{
    setCurGenre(genre);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const increasingOrder = () => {
    let result = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    SetWatchList([...result]);
  };

  const increasingOrderPopularity = () => {
    let result = watchlist.sort((movieA, movieB) => {
      return movieA.popularity - movieB.popularity;
    });
    SetWatchList([...result]);
  };

  const decreasingOrder = () => {
    let result = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    SetWatchList([...result]);
  };

  const decreasingOrderPopularity = () => {
    let result = watchlist.sort((movieA, movieB) => {
      return movieB.popularity - movieA.popularity;
    });
    SetWatchList([...result]);
  };

  useEffect(() => {
    let tempList = watchlist.map((movieObj) => {
      return genre[movieObj.genre_ids[0]];
    });
    tempList=new Set(tempList);
    setGenreList(["All Genre", ...tempList]);
    // console.log(tempList);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex wrap m-4">
        {genreList.map((genre,i) => {
          return (
            <div key={i} onClick={()=>handleCurGenre(genre)} className={genre===curgenre?"hover:cursor-pointer bg-blue-400 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center mx-4":"hover:cursor-pointer bg-gray-400 flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center mx-4"}>
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search Movies"
          className="rounded-xl h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-start">
                <div onClick={increasingOrder} className="p-2">
                  <i className="fa-solid fa-arrow-up hover:cursor-pointer"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div onClick={decreasingOrder} className="p-2">
                  <i className="fa-solid fa-arrow-down hover:cursor-pointer"></i>
                </div>
              </th>

              <th>
                <div className="flex justify-center">
                  <div onClick={increasingOrderPopularity} className="p-2">
                    <i className="fa-solid fa-arrow-up hover:cursor-pointer"></i>
                  </div>
                  <div className="p-2">Popularity</div>

                  <div onClick={decreasingOrderPopularity} className="p-2">
                    <i className="fa-solid fa-arrow-down hover:cursor-pointer"></i>
                  </div>
                </div>
              </th>

              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj)=>{
              if(curgenre==="All Genre"){
                return true;
              }
              else{
                return genre[movieObj.genre_ids[0]]===curgenre;
              }
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj, i) => {
                return (
                  <tr key={i} className="border-b-2">
                    <td className="flex items-center px-4 py-2">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                        alt=""
                      />
                      <div className="mx-10">{movieObj.original_title}</div>
                    </td>

                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genre[movieObj.genre_ids[0]]}</td>

                    <td
                      onClick={() => removeFromWatchList(movieObj)}
                      className="text-red-800 hover:cursor-pointer"
                    >
                      delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
