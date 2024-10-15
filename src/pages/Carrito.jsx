import { Link } from 'react-router-dom';
export function Carrito({ cartItems, removeFromCart }) {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    return (
      <div className="page">
        <h1>Tu Carrito</h1>
        {cartItems.length > 0 ? (
          <ul className="list-unstyled">
            {cartItems.map((item, index) => (
              <Link to={`/detail/${item.id}`} className="searchresultitem">
              <li key={index}>
                <div className="row">
                  <div className="col-2">
                  <img src={item.thumbnail} alt="Product" width="150px" />
                  </div> 
                  <div className="col">
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                  </div> 
                  <div className="col">
                  <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}> Eliminar </button>
                  </div>
                </div>
                
              </li>
              </Link>
            ))}
          </ul>
        ) : (
          <p>El carrito está vacío.</p>
        )}

        <h2>Total de la compra: ${total}</h2>
      </div>
    );
  }