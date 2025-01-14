import ShoppingApp from "./routes/ShoppingApp";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ShoppingApp />
    </Router>
  );
};

export default App;
