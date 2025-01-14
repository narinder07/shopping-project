import "./ListItems.css";
import { NavLink } from "react-router-dom";

const ListItems = ({ href, label }) => {
  return (
    <li>
      <NavLink to={href}>{label}</NavLink>
    </li>
  );
};

export default ListItems;
