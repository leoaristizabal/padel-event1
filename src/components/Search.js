import React, { useContext } from "react";

//importar componentes del dropdown (menu desplegable)

import ClubDropdown from "./ClubDropdown";
import MesDropdown from "./MesDropdown";
import CategoriaDropdown from "./CategoriaDropdown";

//importar iconos

import { RiSearch2Line } from "react-icons/ri";


//importar contexto 
import { TorneoContext } from "./TorneoContext";

const Search = () => {
  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg: shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg ">
      {/* Componentes de dropdown para ubicación, mes y categoría */}
      <ClubDropdown />
      <MesDropdown />
      <CategoriaDropdown />

      {/* Botón de búsqueda con icono */}
      <button className="bg-green-700 hover:bg-green-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg">
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
