export function Carrito({ cartItems, removeFromCart}) {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    return (
      <div className="page">
        <h1>Tu Carrito</h1>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <p>{item.title}</p>
                <p>${item.price}</p>
                <img src={item.thumbnail} alt="Product" />
                <button onClick={() => removeFromCart(item.id)}> Eliminar </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>El carrito está vacío.</p>
        )}

        <h2>Total de la compra: ${total}</h2>
      </div>
    );
  }