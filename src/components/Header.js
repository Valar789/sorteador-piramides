import React from "react";
import logoHapkido from "../public/logo.png";

export default function Header() {
  return (
    <>
      <header className="grid grid-cols-12 p-4  bg-bluePrimary text-white">
        <div className="col-span-2 grid place-content-center">
      
          <img className="object-cover h-28 " src={logoHapkido} alt="Logo" />
        </div>
        <div className="col-span-8 grid  place-content-center gap-2">
          <h1 className="text-4xl">Federación Colombiana de Hapkido</h1>
          <ul className="flex justify-center gap-8">
            <li>Cargar nuevo documento</li>
            <li>Plantillas pirámides</li>
          </ul>
        </div>
      </header>
      <div className="flex place-content-center ">
        <div className="w-96 w- lg:w-72 h-2 bg-yellow"></div>
        <div className="w-96 lg:w-72 h-2 bg-blue"></div>
        <div className="w-96 lg:w-72 h-2 bg-red"></div>
      </div>
    </>
  );
}
