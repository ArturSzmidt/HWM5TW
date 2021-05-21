import React, { Component } from 'react';
<<<<<<< Updated upstream
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
=======
import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Container,
} from 'react-bootstrap';
import fetchProducts from '../functions/fetchProducts';

class CardComponent extends Component {
  state = {
    products: [],
  };

  componentDidMount = async () => {
    const getProducts = await fetchProducts();
    this.setState({ products: getProducts });
  };
  render() {
    return (
      <Container>
        <Row>
          {this.state.products.map((product) => (
            <div className="col-3 py-3">
              <Card style={{}}>
                <Card.Img
                  variant="top"
                  src="holder.js/100px180?text=Image cap"
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{product.name}</ListGroupItem>
                  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Row>
      </Container>
>>>>>>> Stashed changes
    );
  }
}

export default CardComponent;
