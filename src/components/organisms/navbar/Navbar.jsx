import "./Navbar.css";
import Logo from "../../atoms/logo/Logo";
import UnOrderList from "../../molecules/unOrderLists/UnOrderLists";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = (props) => {
  return (
    <div className="shopping-navbar">
      <Logo {...props} />
      <div className="menu-links">
        <UnOrderList {...props} />
      </div>
      <div className="shopping-cart">
        <FaShoppingCart />
        <div className="shopping-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
