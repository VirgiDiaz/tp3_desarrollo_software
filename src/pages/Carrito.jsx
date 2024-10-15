import { Link } from 'react-router-dom';

export function Carrito({ cartItems, removeFromCart, decreaseQuantity }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="page">
      <div className="container-md py-5">
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="card-body">
            <h3>Tu Carrito</h3>
            {cartItems.length > 0 ? (
              <ul className="list-unstyled">
                {cartItems.map((item, index) => (
                  <li key={index}>
                    <div className="card p-3 bg-body-tertiary rounded">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-2">
                            <img src={item.thumbnail} alt="Product" width="150px" />
                          </div>
                          <div className="col-3">
                            <Link to={`/detail/${item.id}`} className="searchresultitem text-decoration-none text-dark">
                              <h5>{item.title}</h5>
                              <h6>${item.price} x {item.quantity} = ${item.price * item.quantity}</h6>
                              {item.shipping.free_shipping && (
                                <p style={{ color: 'green' }}>Envío gratis</p>
                              )}
                            </Link>
                          </div>
                          <div className="col-2 d-flex justify-content-end">
                            <button className="btn btn-warning me-2" onClick={() => decreaseQuantity(item.id)}>Restar</button>
                            <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>El carrito está vacío.</p>
            )}
            <div className="card shadow p-3 bg-body-tertiary rounded">
              <div className="card-body">
                <h4>Total de la compra: ${total}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
