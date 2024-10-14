import { Link } from "react-router-dom";


export function NavBar({cartCount}) {
    return (
      <>
        <nav>
            <Link to="/page1">Home</Link>
            <Link to="/page2">Carrito</Link>
            <div>
            🛒 {cartCount}
            </div>
            
            
          
        </nav>
      </>
    )
};