import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function DetailPage () {
    const { id } = useParams();
    const [info, setInfo] = useState(null);
    

    useEffect(() => {
        axios.get(`https://api.mercadolibre.com/items/${id}`).then((response) => {
           setInfo(response.data);

        })
    }, [id]); 

    
    return (
        <div>
            {info ? (
                <div>
                     <p>{info.title}</p>
                                        <p>${info.price}</p>
                                        <p>{info.condition}</p>
                                        <img src={info.thumbnail}/> 
                                        <p> Vendido por: {info.official_store_name}</p>
                                        {info.shipping.free_shipping && (
                                            <p style={{ color: 'green' }}>Envío gratis</p>
                                        )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <Link to="/"> Volver </Link>
        </div>
    );
}