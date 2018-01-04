import React, { Component } from 'react';

// hoc
import NoWrap from '../hoc/noWrap';

// components
import Nav from '../components/Nav/Nav1';
import Form1 from '../components/Form/Form1';
import Card2 from '../components/Card/Card2';


// styled components
import { Title2h3 } from '../styleComponents/Titles';
import { FloatLeft } from '../styleComponents/FloatLeft';
import { FloatRight } from '../styleComponents/FloatRight';
import { ClearFix } from '../styleComponents/ClearFix';


// styled components
import { Row } from '../styleComponents/Row';

class AddPlayer extends Component {

  state = {
    player: {
      name: null,
      img: null,
      offense: null,
      defense: null,
      skills: [
        {ballManipulation: null},
        {kickingAbilities: null},
        {passingAbilities: null},
        {duelTackling: null},
        {fieldCoverage: null},
        {blockingAbilities: null},
        {gameStrategy: null},
        {playmakingRisks: null}
      ]
    },
    formError: false,
    display: null,
    formSubmited: false
  }

  playerDisplay = (player) => {
    this.setState({display: player})
  }

  handleFormSubmit = () => {
    this.setState({formSubmited: true})
  }

  resetDisplay = () => {
    this.setState({formSubmited: false})
  }

  render() {
    return (
      <NoWrap>
        <Nav/>
        <Row>
          <Title2h3>Add Player</Title2h3>
          <ClearFix>
            <FloatLeft>
              <Form1 playerDisplay={ this.playerDisplay }
                     formSubmited={ this.handleFormSubmit }
                     resetDisplay={ this.resetDisplay }/>
            </FloatLeft>
            <FloatRight style={{width: '46%'}}>
              <Card2 display={ this.state.display }
                     formSubmited={ this.state.formSubmited }/>
            </FloatRight>  
          </ClearFix>
        </Row>
      </NoWrap>
    );
  }
}

export default AddPlayer;