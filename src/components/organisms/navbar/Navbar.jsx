import "./Navbar.css";
import Logo from "../../atoms/logo/Logo";
import UnOrderList from "../../molecules/unOrderLists/UnOrderLists";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cart");
  };

  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="shopping-navbar sticky-top ">
      <Logo {...props} />
      <div className="menu-links">
        <UnOrderList {...props} />
      </div>
      <div className="shopping-cart" onClick={handleClick}>
        <FaShoppingCart />
        {cart.length > 0 && <div className="shopping-count">{cart.length}</div>}
      </div>
    </div>
  );
};

export default Navbar;
