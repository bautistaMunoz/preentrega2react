import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../contexto/CartContext'
import { Link } from 'react-router-dom'
import "./cart.css"

const Cart = () => {
    const {cart, totalPrice, deleteProductById, deleteCart} = useContext(CartContext)
    if(cart.length === 0){
        return(
            <div>
                <h2>No hay productos en el carrito</h2>
                <Link to="/">VOLVER AL INICIO</Link>
            </div>
        )
    }

    return (
        <div>
        <h2 className='tittleGen'>Productos en el carrito</h2>
        {
            cart.map((productCart)=>(
                <div className='divGen' key={productCart.id}>
                    <img className='imgCart' src={productCart.image} width={200} alt="" />
                    <p className='productCart'>{productCart.name}</p>
                    <p className='quantityCart'>Cantidad: {productCart.quantity}</p>
                    <p className='partiallyPrice'>Precio parcial: {productCart.quantity * productCart.price}</p>

                    <button className='deleteProducts' onClick={() =>deleteProductById(productCart.id)}>Borrar Producto</button>
                </div>
            ))
        }

        <Link className='finishBuy' to="/Checkout">CLICK AQUI PARA FINALIZAR LA COMPRA</Link>
        <p className='totalPrice'>Precio total: {totalPrice()}</p>
        <button className='deleteCart' onClick={deleteCart}>Borrar carrito</button>
        </div>
    )
}

export default Cart
