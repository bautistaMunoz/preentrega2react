const ItemDetail = ({ product }) => {
  return (
    <div style={{ display: "flex" }}>
      <img src={product.image} width={400} alt="cerveza" />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
      </div>
    </div>
  )
}
export default ItemDetail