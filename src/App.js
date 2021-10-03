import { Route, Switch } from 'react-router';
import './App.css';
import OrderCard from './components/Order/OrderCard';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Layout from "./hoc/Layout/Layout"

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/orders" exact component={OrderCard} />
      </Switch>
    </Layout>
  );
}

export default App;
