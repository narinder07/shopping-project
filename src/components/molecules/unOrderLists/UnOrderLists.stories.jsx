import UnOrderLists from "./UnOrderLists";

export default {
  title: "Molecules/UnOrderLists",
  component: UnOrderLists,
};

const Template = (args) => <UnOrderLists {...args}></UnOrderLists>;
export const UnOrderList = Template.bind({});

UnOrderList.args = {
  menuLinks: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Products",
      href: "/products",
    },
  ],
};
