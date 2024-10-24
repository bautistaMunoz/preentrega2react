import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <div className="itemCar">
      <img src={product.image} className="imgItem" alt="" width={180} />
      <p className="text-item">{product.name}</p>
      <p className="text-item">${product.price}</p>

      <Link to={"/detail/" + product.id} ><span className="detallesCs">Ver detalles</span></Link>
    </div>
  )
}
export default Item