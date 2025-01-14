import CartPage from "./CartPage";

export default {
  title: "Pages/CartPage",
  component: CartPage,
};

const Template = (args) => <CartPage {...args}></CartPage>;
export const Carts = Template.bind({});

Carts.args = {};
