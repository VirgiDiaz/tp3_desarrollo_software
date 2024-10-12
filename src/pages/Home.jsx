import { BarraBusqueda } from "../components/BarraBusqueda";
import { useState } from "react";
import axios from "axios";
import SearchResults from "../components/SearchResults";
import { Filtros } from "../components/Filtros"; 
export function Home () {

const [searchResults, setSearchResults]=useState(undefined);
const [filters, setFilters] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
const [appliedFilters, setAppliedFilters] = useState({});

    function onSearch (termino)
    {
        setSearchTerm(termino);
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q= ${termino}`)
        .then (function (response)
        {
            setSearchResults(response.data.results);
            setFilters(response.data.available_filters || [])
            setAppliedFilters({});
        })
    }
    function onFilterSelect(filterId, valueId) {
        const newAppliedFilters = { ...appliedFilters, [filterId]: valueId };
        let query = `q=${searchTerm}`;
        Object.keys(newAppliedFilters).forEach((key) => {
          query += `&${key}=${newAppliedFilters[key]}`;
        });
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?${query}`)
      .then((response) => {
        setSearchResults(response.data.results); 
        setFilters(response.data.available_filters || []); 
        setAppliedFilters(newAppliedFilters); 
    });
}
    return (
        <div className="page">
            
            <BarraBusqueda onSearch={onSearch} />
            {filters.length > 0 && (
            <Filtros filters={filters} onFilterSelect={onFilterSelect} /> 
            )}
            <SearchResults results={searchResults}/>
        </div>
    )
}