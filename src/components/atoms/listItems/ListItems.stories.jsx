import ListItems from "./ListItems";

export default {
  title: "Atoms/ListItems",
  component: ListItems,
};

const Template = (args) => <ListItems {...args}></ListItems>;
export const ListItem = Template.bind({});

ListItem.args = {
  label: "Home",
  href: "/",
};
