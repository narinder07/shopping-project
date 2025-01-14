// import { Provider } from "react-redux";
// import { store } from "../src/redux/Store";
// import { BrowserRouter as Router } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// const preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
//   decorators: [
//     (Story) => (
//       <Provider store={store}>
//         <Router>
//           <Story />
//         </Router>
//       </Provider>
//     ),
//   ],
// };

// export default preview;

import "bootstrap/dist/css/bootstrap.min.css";
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
