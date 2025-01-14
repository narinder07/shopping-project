import { createSlice } from "@reduxjs/toolkit";
import shoppingLogo from "../assets/shopping-logo.png";

const initialState = {
  navbarProps: {
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
  },

  footerProps: {
    shoppingLogo: shoppingLogo,
    alt: "Footer logo",
    href: "/",
    copyRight: "© Shopping Narinder project",
  },
};

export const commonTemplate = createSlice({
  name: "commonTemplate",
  initialState,
  reducers: {
    navBar: (state) => {
      state.navbarProps;
    },
    footer: (state) => {
      state.footerProps;
    },
  },
});
export const { navBar, footer } = commonTemplate.actions;
export default commonTemplate.reducer;
