import React, { Component } from 'react';
import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Container,
} from 'react-bootstrap';
import fetchProducts from '../functions/fetchProducts';
import {Link ,BrowserRouter as Router, Route} from 'react-router-dom'

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
								<Card.Img variant="top" src={product.imageUrl} />
								<Card.Body>
									<Card.Title>{product.title}</Card.Title>
									<Card.Text>{product.description}</Card.Text>
								</Card.Body>
								<ListGroup className="list-group-flush">
									<ListGroupItem>{product.name}</ListGroupItem>
									<ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
									<ListGroupItem>Vestibulum at eros</ListGroupItem>
								</ListGroup>
								<Card.Body className="d-flex justify-content-center">
									{/* <Card.Link href="#">More Details</Card.Link> */}

									<Link to={`/product/${product._id}`}>More Details</Link>
									{/* <Card.Link href="#">Another Link</Card.Link> */}
								</Card.Body>
							</Card>
						</div>
					))}
				</Row>
			</Container>
		);
  }
}

export default CardComponent;
