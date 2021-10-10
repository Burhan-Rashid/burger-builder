import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Logout from './components/Auth/Logout/Logout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Layout from "./hoc/Layout/Layout"

function App() {

  const token = useSelector(state => state.user.token);
  const isAuthenticated = token !== null;

  return (
    <Layout>
      {!isAuthenticated ?
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/auth" exact component={Auth} />
          <Redirect to="/" />
        </Switch> :
        <Switch>
          <Route path="/auth" exact component={Auth} />
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/logout" exact component={Logout} />
          <Redirect to="/" />
        </Switch>
      }
    </Layout>
  );
}

export default App;
