import Hero from "./Hero";

export default {
  title: "Organisms/Hero",
  component: Hero,
};

const Template = (args) => <Hero {...args}></Hero>;
export const Heroes = Template.bind({});

Heroes.args = {
  label: "Here are the best products at the best price",
};
