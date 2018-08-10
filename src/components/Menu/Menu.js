import React, { Component } from 'react';
import {Grid, Row, Col, Nav, NavItem } from 'react-bootstrap';
import './Menu.scss';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const {
      menuItems,
      handleSelect,
      activeKey
    } = this.props;

    return (
    <Col sm={4}>
    <Nav bsStyle="pills" stacked activeKey={activeKey} onSelect={(eventKey) => handleSelect(eventKey)}>
    {menuItems.map((item, index) => <NavItem key={item.id || index} eventKey={item.id || index} title={item.title}>{item.name}</NavItem>)}
    </Nav>
    </Col>
    );
  }
}


