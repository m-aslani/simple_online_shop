import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import { FaCartShopping } from "react-icons/fa6";

import styles from "./Layout.module.css";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to="/products">MY SHOP</Link>
        <Link to="/checkout">
          <div>
            <FaCartShopping />
            {!!state.itemsCount && <span>{state.itemsCount}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>This is a simple online shop website using context ✨</p>
      </footer>
    </>
  );
}

export default Layout;
