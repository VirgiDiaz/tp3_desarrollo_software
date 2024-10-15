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
                                    <Link className="text-decoration-none " to={`/detail/${result.id}`} >
                                    <li className="list-group-item" key={result.id}>
                                        <div className="row py-2">
                                            <div className="col-2 me-2">
                                            <img src={result.thumbnail} height="150px" width="150"/>             
                                            </div>
                                            <div className="col b">
                                            <h5>{result.title}</h5>
                                            <h6>${result.price}</h6>
                                            
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
