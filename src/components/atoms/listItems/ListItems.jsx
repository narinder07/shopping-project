import "./ListItems.css";

const ListItems = ({ href, label }) => {
  return (
    <li>
      <a href={href}>{label}</a>
    </li>
  );
};

export default ListItems;
