import CardComponent from './CardComponent.jsx';

import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="col-3">
            <CardComponent />
          </Col>
        </Row>
      </div>
    );
  }
}
