import React from "react";
import ListItems from "../../atoms/listItems/ListItems";

const UnOrderLists = ({ menuLinks }) => {
  return (
    <ul>
      {menuLinks.map((linksItems, index) => (
        <ListItems
          label={linksItems.label}
          key={index}
          href={linksItems.href}
        />
      ))}
    </ul>
  );
};

export default UnOrderLists;
