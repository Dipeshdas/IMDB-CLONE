import React from "react";

export const Footer = (props) => {
    const {pageNo,nextPage,prevPage}=props
  return (
    <div className="bg-gray-400 p-5 mt-8 flex justify-center rounded-xl">
      <div className="px-8 hover:cursor-pointer">
        <i onClick={prevPage} className="w-5 fa-solid fa-backward"></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div className="px-8 hover:cursor-pointer">
        <i onClick={nextPage} className="w-5 fa-solid fa-forward"></i>
      </div>
    </div>
  );
};
