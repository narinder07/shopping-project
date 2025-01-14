import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args}></Button>;

export const AddToCart = Template.bind({});
AddToCart.args = {
  label: "Add to cart",
};
