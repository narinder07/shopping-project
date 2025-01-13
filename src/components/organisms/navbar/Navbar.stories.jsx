import Navbar from "./Navbar";
import shoppingLogo from "../../../assets/shopping-logo.png";

export default {
  title: "Organisms/Navbar",
  component: Navbar,
};

const Template = (args) => <Navbar {...args}></Navbar>;
export const Header = Template.bind({});

Header.args = {
  shoppingLogo: shoppingLogo,
  alt: "Shopping logo",
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
