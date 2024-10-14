import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function DetailPage ({addToCart}) {
    const { id } = useParams();
    const [info, setInfo] = useState(null);
    const[descripcion, setDescripcion]=useState("");
    

    useEffect(() => {
        axios.get(`https://api.mercadolibre.com/items/${id}`).then((response) => {
           setInfo(response.data);

        })
        axios.get(`https://api.mercadolibre.com/items/${id}/description`).then((response) => {
            setDescripcion(response.data)
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
                                        {info.shipping.free_shipping && (
                                            <p style={{ color: 'green' }}>Envío gratis</p>
                                        )}
                                        <p>{descripcion.plain_text}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <Link to="/"> Volver </Link>
            <button onClick={() => addToCart(info)}> Agregar al carrito </button>
        </div>
    );
}