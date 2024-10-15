import { Link } from 'react-router-dom';
export function Carrito({ cartItems, removeFromCart }) {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    return (
      <div className="page">
        <div className="container-md py-5">
          <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
             <div class="card-body">
             <h3>Tu Carrito</h3>
        {cartItems.length > 0 ? (
          <ul className="list-unstyled">
            {cartItems.map((item, index) => (
              
              <li key={index}>
              <div class="card  p-3 bg-body-tertiary rounded">
              <div class="card-body">
                <div className="row">
                <Link to={`/detail/${item.id}`} className="searchresultitem text-decoration-none text-dark">
                  <div className="col-2">
                  <img src={item.thumbnail} alt="Product" width="150px" />
                  </div> 
                  <div className="col-5">
                  <h5>{item.title}</h5>
                  <h6>${item.price}</h6>
                  {item.shipping.free_shipping && (
                                            <p style={{ color: 'green' }}>Envío gratis</p>
                                            )}
                  </div>
                  </Link> 
                  <div className="col">
                  <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}> Eliminar </button>
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
<div class="card shadow p-3 bg-body-tertiary rounded">
<div class="card-body">
        <h4>Total de la compra: ${total}</h4>
             </div>
        </div>
        </div>
        </div>
      </div>
      </div>
    );
  }