import { Route, Switch } from 'react-router';
import './App.css';
import Auth from './components/Auth/Auth';
import OrderCard from './components/Order/OrderCard';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Layout from "./hoc/Layout/Layout"

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/auth" exact component={Auth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/orders" exact component={OrderCard} />
      </Switch>
    </Layout>
  );
}

export default App;
