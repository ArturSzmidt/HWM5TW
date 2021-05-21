import React, { Component } from 'react';
// import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import fetchProducts from '../functions/fetchProducts';
fetchProducts();
class CardComponent extends Component {
  render() {
    return (
      <div>
        {fetchProducts().map((item) => {
          return <p>{item.name}</p>;
        })}
      </div>
    );
  }
}

export default CardComponent;
