import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, NotFound } from "./Components/default";
import Header from "./Components/Header/Header";
import DetailView from "./Components/ItemDetails/DetailView";
import TemplateProvider from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import Cart from "./Components/Cart/Cart";
import { Box } from "@material-ui/core";
import Footer from "./Components/Footer/Footer";
import Seller from "./Components/Cart/BecomeSeller";
import Appsoon from "./Components/Cart/AppSoon";
import Enroll from "./Components/Cart/Enrool";
import Profile from "./Components/Header/Profile";
import BasicGrid from "./Components/Cart/grid";
import ProfileSettings from "./Components/Header/ProfileSettings";
import StaffEditProfile from "./Components/User/StaffEditprofile";
import ViewProduct from "./Components/User/ViewProduct";
import StaffProfile from "./Components/User/StaffProfile";
import Addproduct from "./Components/User/Addproduct";
import NewProduct from "./Components/User/Createproduct";
import StaffEditProduct from "./Components/User/StaffEditProduct";
import axios from "axios";
import ProductDetail from "./Components/ItemDetails/ProductDetail";
import CartItem from "./Components/Cart/CartItem";
import TotalView from "./Components/Cart/TotalView";
import Checkout from "./Components/Checkout/Checkout";
import EmptyLogin from "./Components/User/EmptyLogin";
import MyOrder from "./Components/User/MyOrder";
import Wishlist from "./Components/Wishlist/Wishlist";

// credentials of axios--------------------
axios.defaults.withCredentials = true;
// credentials of axios--------------------

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cartitem" component={CartItem} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/totalview" component={TotalView} />
              <Route exact path="/productdetail" component={ProductDetail} />
              <Route exact path="/myorder" component={MyOrder} />

              <Route exact path="/cart" component={Cart} />
              <Route exact path="/product/:slug" component={DetailView} />
              <Route exact path="/seller" component={Seller}></Route>
              <Route exact path="/Appsoon" component={Appsoon}></Route>
              <Route exact path="/Enroll" component={Enroll}></Route>
              <Route
                exact
                path="/stafeditprod/product/:slug"
                component={StaffEditProduct}
              ></Route>
              <Route exact path="/Viewall" component={BasicGrid}></Route>
              <Route exact path="/wishlist" component={Wishlist}></Route>
              <Route exact path="/Profile" component={Profile}></Route>
              <Route exact path="/addproduct" component={Addproduct}></Route>
              <Route exact path="/addnewproduct" component={NewProduct}></Route>
              {/* <Route exact path="/ProfileSettings" component={ProfileSettings}></Route> */}
              <Route
                exact
                path="/staffprofile"
                component={StaffProfile}
              ></Route>
              <Route
                exact
                path="/staffeditprofile"
                component={StaffEditProfile}
              ></Route>
              <Route exact path="/viewproduct" component={ViewProduct}></Route>
              <Route exact path="/emptylogin" component={EmptyLogin}></Route>
              <Route component={NotFound} />
            </Switch>
          </Box>
          <Footer />
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
