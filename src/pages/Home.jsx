import { BarraBusqueda } from "../components/BarraBusqueda";
import { useState } from "react";
import axios from "axios";
import SearchResults from "../components/SearchResults";
export function Home () {

const [searchResults, setSearchResults]=useState(undefined);

    function onSearch (termino)
    {
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q= ${termino}`)
        .then (function (response)
        {
            setSearchResults(response.data.results)

        })
    }
    return (
        <div className="page">
            
            <BarraBusqueda onSearch={onSearch} />
            <SearchResults results={searchResults}/>   
        </div>
    )
}