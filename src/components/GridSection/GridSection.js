import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col, Panel, FormGroup, Checkbox, Radio, ControlLabel, FormControl, Button } from 'react-bootstrap';
import questionTypes from '../../constants/question-types';
import './GridSection.scss';

const getInputType = ({type, title, parentQuestion, handleInputChange, value}) => {
  switch (type) {
    case questionTypes.MULTI_CHOICE:
    case questionTypes.YN:
      return <Radio name={parentQuestion} value={value} onChange={handleInputChange} inline>{title}</Radio>;
    case questionTypes.TEXT_INPUT:
      return <FormGroup controlId={title}><ControlLabel>{title}</ControlLabel><FormControl type="text" label={title} onChange={handleInputChange}/></FormGroup> 
      case questionTypes.MULTI_SELECT:
      default:
      return <Checkbox name={parentQuestion} onChange={handleInputChange} value={value} inline>{title}</Checkbox>;
  }
}



export const GridItem = ({handleInputChange, attributeId, id, name, type, options}) => {
  const getOptionId = (optId) => `${attributeId}O${optId}`;
  console.log(attributeId, name);
return (<Row className="grid-item">
  <Col md={4} className="grid-item__header">{name}</Col>
  <Col md={8} className="grid-item__content">
  <FormGroup controlId={name}>
  {options && options.map(option => option.options ? <GridItem attributeId={getOptionId(option.id)} { ...option } key={getOptionId(option.id)}/> :  <div key={getOptionId(option.id)}>{getInputType({type, title: option.name, parentQuestion: name, handleInputChange, value: getOptionId(option.id) })}</div>)}
  {!options && type &&  <div key={getOptionId(id)}>{getInputType(type, name, name, handleInputChange)}</div>}
  </FormGroup>
  </Col>
</Row>);}

export class GridSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: {}
    } 
    
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(target, value, name);

    this.setState({[name]: value});

  }

  render() {
  const { sectionId, sectionData } = this.props;
  const {section, attributes} = sectionData;
  const title = section.charAt(0).toUpperCase()+section.slice(1);
  const selections = {};
  const handleSubmit = () => console.log(selections);
  return (
    <Col sm={8}>
    <Panel>
      <Panel.Title componentClass="h2">{title}</Panel.Title>
      <Panel.Body>
        <form onSubmit={this.handleSubmit}>
        {attributes.map(attribute => <GridItem 
        key={attribute.id} 
        attributeId={`S${sectionId}A${attribute.id}`} 
        id={attribute.id} 
        name={attribute.name} 
        type={attribute.type} 
        handleInputChange={this.handleInputChange}
        options={attribute.options}/>)}
        </form>
        </Panel.Body> 
        <Panel.Footer>
          <Button bsSize="large" type="submit">Done</Button>
        </Panel.Footer>
    </Panel>
    </Col>
    );
  }
}

export default GridSection