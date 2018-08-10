import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-bootstrap';
import {Menu} from '../../components/Menu';
import {GridSection} from '../../components/GridSection';
import {fetchSectionData} from '../../services/api';
import {getQuestionsIndex} from '../../services/questionsUtil';
import logo from './logo.svg';
import './App.scss';

const wineGridMenuItems = [
  {id: 0, title: 'Visual', name: 'Visual'},
  {id: 1, title: 'NosePalate', name: 'Nose & Palate'},
  {id: 2, title: 'Structure', name: 'Structure'},
  {id: 3, title: 'InitialConclusion', name: 'Initial Conclusion'},
  {id: 4, title: 'Conclusion', name: 'Conclusion'}
]


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 1,
      isLoading: false,
      sectionData: undefined
    }
  }

  componentDidMount() {
    // this.setState({ isLoading: true});
    this.setState({sectionData: fetchSectionData()})
 
  }

  handleMenuSelect = (selectedKey) => {
    this.setState({activeKey: selectedKey});
  }
  render() {
    if (this.state.sectionData) {
      
            getQuestionsIndex(this.state.sectionData);
          }
    return (
      <Grid>
        <Row className="app-container">
      <Menu activeKey={this.state.activeKey} handleSelect={this.handleMenuSelect} menuItems={wineGridMenuItems} />
     {this.state.sectionData && <GridSection sectionId={this.state.activeKey} sectionData={this.state.sectionData[this.state.activeKey]}/>}
        </Row>
      </Grid>
    );
  }
}


