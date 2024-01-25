import React, { useState, createContext } from "react";

// Importar datos (en este caso, torneosData)
import { torneosData } from "../data";

// Creacion del contexto llamado TorneoContext
export const TorneoContext = createContext();

// Definir el componente llamado TorneoContextProvider para almacenar los datos que quiero compartir entre otros componentes.
const TorneoContextProvider = ({ children }) => {
  // Estados para almacenar datos importantes que necesito
  const [torneos, setTorneos] = useState(torneosData); // Datos de torneos
  const [club, setClub] = useState("Club (Todos)"); // Nombre del club seleccionado
  const [clubes, setClubes] = useState([]); // Conjunto de opciones de clubes
  const [categoria, setCategoria] = useState("Categoria (Todas)"); // Categoría seleccionada
  const [categorias, setCategorias] = useState([]); // Conjunto de opciones de categorías
  const [mes, setMes] = useState("Meses (Todos)"); // Mes seleccionado
  const [loading, setLoading] = useState(false); // Indicador de carga

  // Devuelve el componente TorneoContext.Provider con los valores que queremos compartir
  return (
    <TorneoContext.Provider
      value={{
        // Datos y funciones que estarán disponibles para los componentes hijos
        club, // Valor actual del club
        setClub, // Función para actualizar el club
        clubes, // Conjunto de opciones de clubes
        categoria, // Valor actual de la categoría
        setCategoria, // Función para actualizar la categoría
        categorias, // Conjunto de opciones de categorías
        mes, // Valor actual del mes
        setMes, // Función para actualizar el mes
        torneos, // Datos de torneos
        loading, // Estado de carga
      }}
    >
      {/* Renderiza los componentes hijos */}
      {children}
    </TorneoContext.Provider>
  );
};

// Exporta el componente TorneoContextProvider como predeterminado
export default TorneoContextProvider;