import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// style
import { breakSmall } from '../../style/variables';

// style components
import { ClearFix } from '../../styleComponents/ClearFix';
import { FloatLeft } from '../../styleComponents/FloatLeft';
import { FloatRight } from '../../styleComponents/FloatRight';

// components
import Card1 from '../Card/Card1';
import List1 from '../List/List1';
import Backdrop from '../Backdrop/Backdrop';
import Modal1 from '../Modal/Modal1';


const Gallry1Style = styled.div`
  .left,
  .right { width: 50%; };

  @media (max-width: ${breakSmall}) {
    .left,
    .right { width: 100%; };
  }
`

class Gallry1 extends Component {

  state = {
    players: [],
    displayPlayer: null,
    activePlayer: 0,
    numberOfPlayers: 0,
    visiblePlayers: 5,
    loadPlayersLimit: 5,
    toggleModal: false,
    removePlayerId: null,
    removePlayerName: null
  }


  componentWillReceiveProps(nextProps) {
    this.selectFirstPlayer(nextProps.data)
  }

  selectFirstPlayer(players) {

    this.setState({
      players: players,
      displayPlayer: players[0],
      numberOfPlayers: players.length,
      activePlayer: players[0]._id,
      visiblePlayers: this.state.visiblePlayers,
      toggleModal: false
    })
  }

  toggleMenu = (id) => {

    this.setState({activePlayer: id})
    this.display(id);
  }

  display = (id) => {
   
    this.state.players.forEach(player => {
      if(player._id === id) {
        this.setState({
          displayPlayer: player
        })
      }
    })
  }

  loadMore = () => {

    this.setState({
      visiblePlayers: this.state.visiblePlayers + this.state.loadPlayersLimit
    })
  }

  removePlayerModalToggle = (id, name) => {

    this.setState({
      toggleModal: !this.state.toggleModal,
      removePlayerId: id,
      removePlayerName: name
    })
  }

  removePlayer = () => {
    const id = this.state.removePlayerId;
    const players = this.state.players.filter(player => {
      return player._id !== id;
    })
    if (this.state.removePlayerId === this.state.activePlayer ) {
      this.selectFirstPlayer(players);
    }else {
      this.setState({
        players: players,
        toggleModal: false
      })
    }
  }

  render() {
  
    const { players, 
            displayPlayer, 
            numberOfPlayers, 
            activePlayer, 
            visiblePlayers,
            toggleModal,
            removePlayerName } = this.state; 
 
    return (
      <Gallry1Style>
        <ClearFix>
          <FloatLeft>
            <Card1 player={ displayPlayer }/>
          </FloatLeft>
          <FloatRight>
            <List1 players={ players } 
                   numberOfPlayers= { numberOfPlayers }
                   activePlayer={ activePlayer }
                   toggleMenu={ this.toggleMenu }
                   visiblePlayers={ visiblePlayers }
                   loadMore={ this.loadMore }
                   removePlayerModal={ this.removePlayerModalToggle }/>
          </FloatRight>
        </ClearFix>
        <Backdrop toggle={ toggleModal } 
                  hideBackdrop={ this.removePlayerModalToggle }/>
        <Modal1 toggle={ toggleModal }
                playerName= { removePlayerName }
                hideModal={ this.removePlayerModalToggle }
                removePlayer={ this.removePlayer }/>
      </Gallry1Style>
    );
  }
}

Gallry1.propTypes = { data: PropTypes.array }

export default Gallry1;