import { Link } from "react-router-dom";

import { BiSolidDetail } from "react-icons/bi";
import { TbShoppingBagPlus } from "react-icons/tb";
import { productQuantity, shortenText } from "../helpers/helper";

import styles from "./Card.module.css";
import { useCart } from "../context/CartContext";
import { MdDeleteForever } from "react-icons/md";

function Card({ data }) {
  const { id, title, image, price } = data;

  const [state, dispatch] = useCart();
  
  const quantity = productQuantity(state, id);

  const clickHandler = (type) => {
    dispatch({ type: type, payload: data });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.action}>
        <Link to={`/products/${id}`}>
          <BiSolidDetail />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => clickHandler("DELETE_ITEM")}>
              <MdDeleteForever />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => clickHandler("DECREASE")}>-</button>
          )}
          <span>{quantity}</span>
          {quantity === 0 ? (
            <button onClick={() => clickHandler("ADD_ITEM")}>
              <TbShoppingBagPlus />
            </button>
          ) : (
            <button onClick={() => clickHandler("INCREASE")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
