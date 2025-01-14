import { configureStore } from "@reduxjs/toolkit";
import commonTemplateReducer from "../common/CommonTemplate.Slice";
import heroReducer from "../pages/homePage/HomePage.Slice";
import CartReducer from "../redux/slices/CartSlice";

const store = configureStore({
  reducer: {
    commonTemplateReducer: commonTemplateReducer,
    heroReducer: heroReducer,
    cart: CartReducer,
  },
});

export default store;
