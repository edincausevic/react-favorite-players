import React, { Component } from 'react';
import axios from 'axios';

// hoc 
import NoWrap from '../hoc/noWrap';

// style components
import { Row } from '../styleComponents/Row';

// components
import Nav1 from '../components/Nav/Nav1';
import Gallry1 from '../components/Gallery/Gallery1';


class Home extends Component {
  state = { data: null }

  componentWillMount() {
    axios.get('https://favorite-players.firebaseio.com/players.json')
      .then(response => {

        const data = [];
        for (let key in response.data) {
          data.push(response.data[key]);
        }

        this.setState({data: data})
      })
  }

  render() {
    const { data } = this.state;

    return (
      <NoWrap>
        <Nav1 />
        <Row>
          <Gallry1 data={ data }/>
        </Row>
      </NoWrap>
    );
  }
}

export default Home;