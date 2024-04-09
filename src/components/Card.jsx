import { Link } from "react-router-dom";

import { BiSolidDetail } from "react-icons/bi";
import { TbShoppingBagPlus } from "react-icons/tb";
import { shortenText } from "../helpers/helper";

import styles from "./Card.module.css";

function Card({ data }) {
  const { id, title, image, price } = data;

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
          <button>
            <TbShoppingBagPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
