import { Link } from "react-router-dom";

export default function SearchResults({ results }) {
  return (
    <div>
      {results ? (
        results.length === 0 ? (
          <div> No hay resultados disponibles </div>
        ) : (
          <ul className="list-group list-group-flush">
            {results.map((result) => {
              return (
                <Link
                  className="text-decoration-none"
                  to={`/detail/${result.id}`}
                  key={result.id}
                >
                  <li className="list-group-item">
                    <div className="row align-items-center py-2">
                      <div className="col-4 col-md-2">
                        <img
                          src={result.thumbnail}
                          alt="imagen producto"
                          className="img-fluid"
                          style={{ maxHeight: "150px" }}
                        />
                      </div>
                      <div className="col-8 col-md-9">
                        <h5>{result.title}</h5>
                        <h6>${result.price}</h6>
                        {result.shipping.free_shipping && (
                          <p style={{ color: "green" }}>Envío gratis</p>
                        )}
                      </div>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        )
      ) : (
        <></>
      )}
    </div>
  );
}
