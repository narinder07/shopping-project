import Hero from "./Hero";

export default {
  title: "Organisms/Hero",
  component: Hero,
};

const Template = (args) => <Hero {...args}></Hero>;
export const Heroes = Template.bind({});

Heroes.args = {
  label: "Here is the best products in best price",
};
