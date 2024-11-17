import { useContext } from "react";
import { CartContext } from "../../contexto/CartContext";
import { RiShoppingCartFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    const quantity = totalQuantity()

    return (
        <Link to="/cart" className="cartConta">
            <RiShoppingCartFill />
            <p>{quantity >= 1 && quantity}</p>
        </Link>
    );
};

export default CartWidget;
