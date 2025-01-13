import Logo from "./Logo";
import shoppingLogo from "../../../assets/shopping-logo.png";

export default {
  title: "Atoms/Logo",
  component: Logo,
};

const Template = (args) => <Logo {...args}></Logo>;
export const ShoppingLogo = Template.bind({});

ShoppingLogo.args = {
  shoppingLogo: shoppingLogo,
  alt: "Shopping logo",
};
