import React, { Component } from 'react';
import styled from 'styled-components';

// style 
import { Clr1 } from '../../style/variables';

// styleComponents
import { Title2h3 } from '../../styleComponents/Titles';

//components
import ListItem1 from './ListItem/ListItem1';
import Btn2 from '../Button/Btn2';
import PushContentDown from '../Push/PushContentDown';

const List1Style = styled.div`
  padding: 0px 10px 10px 10px;

  h3 {
    color: ${Clr1};
    margin-bottom: 20px;
  }
`

class List1 extends Component {
  
  renderPlayer = () => {
    if (this.props.players) {
      let key = 0;
      let allPlayers = this.props.players.map((player, i) => {
        if (this.props.visiblePlayers >= (i+1)) {
          key++;
          return (
            <ListItem1 image={ player.img } 
                          removePlayerModal={ () => this.props.removePlayerModal(player._id, player.name) }
                          clicked={ () => this.props.toggleMenu(player._id) }
                          activePlayer={ this.props.activePlayer === player._id}  
                          key={ key }>{ player.name }</ListItem1>
          )
        }else { return false; }
      })
      return allPlayers;
    }
  }
  

  render() {
    const { loadMore, visiblePlayers, numberOfPlayers } = this.props;
   
    return (
      <List1Style>
        <Title2h3>Player List</Title2h3>
        {this.renderPlayer()}
        <Btn2 clicked={ loadMore }
              toggle={ numberOfPlayers <= visiblePlayers}>Load More</Btn2>
        <PushContentDown/>
      </List1Style>
    );
  }
};


export default List1;