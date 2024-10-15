import { useState } from "react";
import React from "react";

export function BarraBusqueda({onSearch}) {
const [termino, setSearchTerm] = useState("");
  return (
    <div className="container-fluid p-3">
      <form onSubmit={(e) => {e.preventDefault(); onSearch(termino);}} className="d-flex">
        <input type = "text" placeholder="Búsqueda" onChange={(e) => setSearchTerm(e.target.value)} className="form-control me-2"/>
        <button className="btn btn-secondary"> Buscar </button>
      </form>
    </div>
  );
}