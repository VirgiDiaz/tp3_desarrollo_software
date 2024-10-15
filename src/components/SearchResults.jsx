import { Link } from 'react-router-dom';
export default function SearchResults({results}) {
    return (
        <div>
            {
                results?
                results.length === 0? 
                    <div> No hay resultados disponibles </div>: 
                    <ul className="list-group list-group-flush">
                        {
                            results.map((result) => {
                                return (
                                    <Link to={`/detail/${result.id}`} className="searchresultitem">
                                    <li className="list-group-item" key={result.id}>
                                        <div className="row">
                                            <div className="col-2">
                                            <img src={result.thumbnail} height="150px"/>             
                                            </div>
                                            <div className="col">
                                            <p>{result.title}</p>
                                            <p>${result.price}</p>
                                            <p>{result.condition}</p>
                                            {result.shipping.free_shipping && (
                                            <p style={{ color: 'green' }}>Envío gratis</p>
                                            )}</div>
                                        </div>  
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
