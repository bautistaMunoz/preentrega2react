
    import { useState } from "react"
    import "./itemCount.css"

    export default function ItemCount( {price, stock, addProduct} ) {
    const [count, setCount] = useState(1)

    const handleClickInc = () => {
        if (count < stock) {
        setCount(count + 1)
        }
    }
    const handleClickDec = () => {
        if (count > 1) {
        setCount(count - 1)
        }
    }

    return (
        <>
        <div className="countBox">
            <button className="buttonMinus" onClick={handleClickDec}>-</button>
            <span> {count} </span>
            <button className="buttonMas" onClick={handleClickInc}>+</button>
        </div>
        {/* {count !== 0 && <p>Total: ${price * count}</p>} */}
        <button className="buttonAddCart" onClick={() => addProduct(count)}><span className="spanAddCart">Agregar al carrito</span></button>
        </>
    )
}