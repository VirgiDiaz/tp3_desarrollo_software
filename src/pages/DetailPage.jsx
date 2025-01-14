import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function DetailPage({ addToCart }) {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    axios.get(`https://api.mercadolibre.com/items/${id}`).then((response) => {
      setInfo(response.data);
    });

    axios
      .get(`https://api.mercadolibre.com/items/${id}/description`)
      .then((response) => {
        setDescripcion(response.data);
      });
  }, [id]);

  return (
    <div className="container-xl py-3">
      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="card-body">
          {info ? (
            <div>
              <div className="row mb-3">
                <div className="col">
                  <Link to="/" className="btn btn-outline-secondary">
                    Volver
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4 mb-3 mb-md-0 text-center">
                  <img
                    src={info.thumbnail}
                    className="img-fluid"
                    alt={info.title}
                  />
                </div>
                <div className="col-12 col-md-8">
                  <h5>{info.title}</h5>
                  <h6 className="text-muted">${info.price}</h6>

                  {info.shipping.free_shipping && (
                    <p style={{ color: "green" }}>Envío gratis</p>
                  )}

                  <button
                    className="btn btn-outline-primary my-2"
                    onClick={() => addToCart(info)}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>

              <div className="row py-3">
                {descripcion?.plain_text && (
                  <div className="col-12">
                    <div className="card p-3 bg-body-tertiary rounded">
                      <div className="card-body">
                        <h6>Descripción</h6>
                        <p>{descripcion.plain_text}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>
    </div>
  );
}
