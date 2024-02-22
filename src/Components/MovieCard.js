import React from "react";

export const MovieCard = (props) => {
  const {
    watchlist,
    removeFromWatchList,
    movieObj,
    poster_path,
    name,
    addToWatchList,
  } = props;

  const doesContain = (movieObj) => {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  };

  return (
    <div
      className="h-[40vh] w-[150px] bg-cover bg-center rounded-xl hover:scale-110 duration:100 hover:cursor-pointer flex flex-col justify-between items-end "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div onClick={() => {
          removeFromWatchList(movieObj);
        }}
        className="m-2 flex justify-center h-8 w-8 items-center bg-gray-900/60 rounded-xl"> &#10060;</div>
      ) : (
        <div
          onClick={() => {
            addToWatchList(movieObj);
          }}
          className="m-2 flex justify-center h-8 w-8 items-center bg-gray-900/60 rounded-xl"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60 rounded-xl">
        {name}
      </div>
    </div>
  );
};
