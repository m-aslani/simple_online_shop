import { shortenText } from '../helpers/helper'
import { MdDeleteForever } from 'react-icons/md'

import styles from "./BasketCard.module.css"

function BasketCard({data , clickHandler}) {
  return (
    <div className={styles.card}>
        <img src={data.image} alt={data.title} />
        <p>{shortenText(data.title)}</p>
        <div className={styles.action}>
            {data.quantity === 1 && (
                <button onClick={()=>clickHandler("DELETE_ITEM",data)}>
                    <MdDeleteForever/>
                </button>
            )}
            {data.quantity>1 && <button onClick={()=>clickHandler("DECREASE" , data)}>-</button>}
            <span>{data.quantity}</span>
            <button onClick={()=>clickHandler("INCREASE", data)}>+</button>
        </div>
    </div>
  )
}

export default BasketCard