import React, { useState, createContext, useEffect } from "react";

// Importar datos (en este caso, torneosData)
import { torneosData } from "../data";

// Creacion del contexto llamado TorneoContext
export const TorneoContext = createContext();

// Definir el componente llamado TorneoContextProvider para almacenar los datos que quiero compartir entre otros componentes.
const TorneoContextProvider = ({ children }) => {
  // Estados para almacenar datos importantes que necesito
  const [torneos, setTorneos] = useState(torneosData); // Datos de torneos
  const [club, setClub] = useState("Clubes Disponibles"); // Nombre del club seleccionado
  const [clubes, setClubes] = useState([]); // Conjunto de opciones de clubes
  const [categoria, setCategoria] = useState("Categorias Disponibles"); // Categoría seleccionada
  const [categorias, setCategorias] = useState([]); // Conjunto de opciones de categorías
  const [mes, setMes] = useState("Mes"); // Mes seleccionado
  const [meses, setMeses] = useState([]); //Conjunto de opcoines de meses de los torneos
  const [loading, setLoading] = useState(false); // Indicador de carga para el menu desplegable

  //return de todos los CLUBES en la data. (useEffecto porque solo renderiza esta parte)
  useEffect(() => {
    const allClubes = torneos.map((torneo) => { //mapeo para encontrar cada torneo por separado del array Torneos data llamandolo solo torneo
      return torneo.club; //despues devuelve el club de cada objeto por serado denominado torneo.
    });
    console.log(allClubes);

    //En caso de haber clubes duplicados, los borramos/removemos (por ahora no hay):

    const clubesUnicos = ["Clubes Disponibles (Todos)", ...new Set(allClubes)];

    {
      /*console.log(clubesUnicos); //Prubea de que este funicionando*/
    }

    setClubes(clubesUnicos); //actualizar estado de Clubes a ClubesUnicos
  }, []);

  //Return de las CATEGORIAS en la data (analogamente como con los clubes arriba)
  useEffect(() => {
    const allCategorias = torneos.map((torneo)=> { //mapeo para encontrar cada torneo por separado en el array de torneos.
      return torneo.categoria; //devuelvo la categoria de cada objeto por separado.
    });

    console.log(allCategorias); 

    const categoriaUnicas = ["Categorias Disponibles (Todos)", ... new Set(allCategorias)];

    setCategorias(categoriaUnicas);
  }, []);


  //Return de los MESES de torneos disponibles (igual que con los Clubes y Categorias)

  useEffect (()=> {
    const allMeses = torneos.map((torneo) => {
      return torneo.mes; 
    });

    console.log(allMeses);

    const mesesUnicos = ["Mes (Todos)", ... new Set(allMeses)];

    setMeses(mesesUnicos);

    console.log(mesesUnicos);

  }, []);

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
        meses, //conjunto de opciones de meses pero sin orden
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
