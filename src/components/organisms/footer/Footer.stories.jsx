import Footer from "./Footer";
import shoppingLogo from "../../../assets/shopping-logo.png";

export default {
  title: "Organisms/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args}></Footer>;
export const WebFooter = Template.bind({});

WebFooter.args = {
  shoppingLogo: shoppingLogo,
  alt: "Footer logo",
  href: "/",
  copyRight: "© Shopping Narinder project",
};
