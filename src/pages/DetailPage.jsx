import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function DetailPage({ addToCart }) {
    const { id } = useParams();
    const [info, setInfo] = useState(null);
    const [descripcion, setDescripcion] = useState("");

    useEffect(() => {
        axios.get(`https://api.mercadolibre.com/items/${id}`).then((response) => {
            setInfo(response.data);
        });

        axios.get(`https://api.mercadolibre.com/items/${id}/description`).then((response) => {
            setDescripcion(response.data);
        });
    }, [id]);

    return (
        <div>
            {info ? (
                <div>
                    <div className="row">
                        <div className="col-2">
                            <img src={info.thumbnail} height="200px" alt={info.title} />
                        </div>
                        <div className="col">
                            <p>{info.title}</p>
                            <p>${info.price}</p>
                            <p>{info.condition}</p>
                            {info.shipping.free_shipping && (
                                <p style={{ color: 'green' }}>Envío gratis</p>
                            )}
                            <Link className="btn btn-outline-primary mx-1" to="/">Volver</Link>
                            <button className="btn btn-outline-primary" onClick={() => addToCart(info)}>Agregar al carrito</button>
                        </div>
                    </div>
                    <div className="row">
                        {descripcion?.plain_text && (
                            <>
                                <h6>Descripción</h6>
                                <p>{descripcion.plain_text}</p>
                            </>
                        )}
                    </div>
                </div>
            ) : (
                <p>Cargando ...</p>
            )}

            
        </div>
    );
}
