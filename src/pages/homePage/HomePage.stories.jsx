import HomePage from "./HomePage";

export default {
  title: "Pages/HomePage",
  component: HomePage,
};

const Template = (args) => <HomePage {...args}></HomePage>;
export const Page = Template.bind({});

Page.args = {};
