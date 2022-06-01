import Reducer from "./comp/Reducer";
import "./App.css";
import Navbar from "./comp/Navbar";
import Body from "./comp/Body";
import { CartProvider } from "./comp/Context/CartContext";
import { AuthorizationProvider } from "./comp/Context/AuthContext";
import { ThemeContext} from "./comp/Context/ThemeContext";
import { useContext } from "react";

function App() {
  const { isLight } = useContext(ThemeContext);
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      
        <AuthorizationProvider>
          <CartProvider>
            <Navbar />
            <Reducer />
            <Body />
          </CartProvider>
        </AuthorizationProvider>
     
    </div>
  );
}

export default App;
