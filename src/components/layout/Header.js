import React from "react";
import NavBar from "./NavBar";

 

export default function Header() {
  return (
    <>

      <header className="grid grid-cols-12 p-4 bg-bluePrimary  text-white">
        <div className="col-span-2 grid place-content-center"></div>
        <div className="col-span-8 grid text-center  place-content-center gap-2">
          <h1 className="text-lg md:text-3xl lg:text-4xl">
          Sorteador  

          </h1>
          <h2 className="text-md md:text-2xl lg:text-3xl">Pirámides de competencia</h2>
          {/* NavBar Condicionado */}
          <NavBar/> 
        </div>
      </header>
      <div className="flex place-content-center bg-blueSecondary">
        <div className="w-96 w- lg:w-80 h-2 bg-yellow"></div>
        <div className="w-96 lg:w-80 h-2 bg-blue"></div>
        <div className="w-96 lg:w-80 h-2 bg-red"></div>
      </div>
    </>
  );
}
