import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BackOffice from './components/BackOffice';
import Home from './components/Home';
import NavBar from './components/navbar';
import fetchProducts from './functions/fetchProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/index.css';

class App extends React.Component {
  state = {
    user: {},
  };

  componentDidMount = async () => {
    const getProducts = await fetchProducts();
    console.log('wow', getProducts);
  };

  render() {
    return (
      <Router basename="/">
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/backoffice" exact component={BackOffice} />
      </Router>
    );
  }
}

export default App;
