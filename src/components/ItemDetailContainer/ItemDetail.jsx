import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../contexto/CartContext"
import { Link } from "react-router-dom"
import "./itemDetail.css"

const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true)
  const { addProductInCart } = useContext(CartContext)

    const addProduct = (count) =>{
      const productCart = { ...product, quantity: count }

      addProductInCart(productCart)
      setShowItemCount(false)
    }

  return (
    <div style={{ display: "flex" }}>
      <img className="imgDetail" src={product.image} width={400} alt="cerveza" />
      <div>
        <h2 className="productName">{product.name}</h2>
        <p className="descriptionStyle">{product.description}</p>
        <div className="boxPriceDetail"><p className="priceStyle">Precio ${product.price}</p></div>
        {
          showItemCount === true ? (
            <ItemCount stock={product.stock} addProduct={addProduct}/>
          ) : (
            <Link className="linkFinishBuy" to="/cart">click aqui para finalizar la compra</Link>
          )
        }
      </div>
    </div>
  )
}
export default ItemDetail