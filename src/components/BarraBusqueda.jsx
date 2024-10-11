import { useState } from "react";
import React from "react";

export function BarraBusqueda({onSearch}) {
const [termino, setSearchTerm] = useState("");
  return (
    <div>
      <form onSubmit={(e) => {e.preventDefault(); onSearch(termino);}}>
        <input type = "text" placeholder="Búsqueda" onChange={(e) => setSearchTerm(e.target.value)}/>
        <button> Buscar </button>
      </form>
    </div>
      
  );
}