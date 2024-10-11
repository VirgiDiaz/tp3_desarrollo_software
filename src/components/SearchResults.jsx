import { Link } from 'react-router-dom';
export default function SearchResults({results}) {
    return (
        <div>
            {
                results?
                results.length === 0? 
                    <div> No results found</div>: 
                    <ul>
                        {
                            results.map((result) => {
                                return (
                                    <Link to={`/detail/${result.id}`} className="searchresultitem">
                                    <li key={result.id}>
                                        <p>{result.title}</p>
                                        <p>${result.price}</p>
                                        <p>{result.condition}</p>
                                        <img src={result.thumbnail}/> 
                                        <p> Vendido por: {result.official_store_name}</p>
                                        {result.shipping.free_shipping && (
                                            <p style={{ color: 'green' }}>Envío gratis</p>
                                        )}
                                    </li>
                                    </Link>
                                );
                            })
                        }
                    </ul>:<></>
                
            }
        </div>
    )
}
