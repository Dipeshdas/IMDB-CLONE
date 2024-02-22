// import React, { useEffect, useState } from "react";

export const Banner = ({watchlist}) => {
  // const [style,setStyle]=useState({backgroundImage: `url(https://i.redd.it/kg7dlnm296t01.jpg)` })
  // useEffect(()=>{
  //   if(watchlist.length>0){
  //     setStyle({backgroundImage: `url(https://image.tmdb.org/t/p/original/${watchlist[0].poster_path})`})
  //   }
  //   else{
  //     setStyle(style);
  //   }
  // },[watchlist])
  return (
    <>
      <div
        className="h-[20vh] md:h-[70vh] bg-cover bg-center flex item-end"
        style={watchlist.length>0?{backgroundImage: `url(https://image.tmdb.org/t/p/original/${watchlist[0].backdrop_path})`}: {backgroundImage: `url(https://i.redd.it/kg7dlnm296t01.jpg)` }}
      >
        
      </div>
    </>
  );
};
