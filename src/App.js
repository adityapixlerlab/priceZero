import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Login from "./view/auth/Login";
import Home from "./view/header/Home";
import Signup from "./view/auth/Signup";
import axios from "axios";
import PrivateRoute from "./view/routing/PrivateRoute";
import { BASE_URL } from "./helper/helper";
import Addproduct from "../src/view/form/Addproduct";
// import ProductDetail from "./view/routing/ProductDetail";
import Detail from "./view/routing/Detail";
import CategoryProduct from ".././src/route/CategoryProduct";
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Home} exact />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/addproduct" component={Addproduct} />
        <PrivateRoute path="/category" component={CategoryProduct} />
        <PrivateRoute path="/detail/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
