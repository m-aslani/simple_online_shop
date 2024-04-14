

import { MdOutlinePriceChange, MdOutlineProductionQuantityLimits } from "react-icons/md";
import styles from "./BasketSideBar.module.css";
import { BsFillCartCheckFill } from "react-icons/bs";


function BasketSideBar({state , checkoutHandler}) {
  return (
    <div className={styles.sideBar}>
        <div>
            <MdOutlinePriceChange/>
            <p>Total : </p>
            <span>{state.total} $</span>
        </div>
        <div>
            <MdOutlineProductionQuantityLimits/>
            <p>Quantity : </p>
            <span>{state.itemsCount}</span>
        </div>
        <div>
            <BsFillCartCheckFill/>
            <p>Status : </p>
            <span>{!state.checkout && "Pending..."}</span>
        </div>
        <button  onClick={()=>checkoutHandler("CHECKOUT")}>CheckOut</button>
    </div>
  )
}

export default BasketSideBar