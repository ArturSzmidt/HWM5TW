import CardComponent from './CardComponent.jsx';

import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div>
        <CardComponent />
      </div>
    );
  }
}
