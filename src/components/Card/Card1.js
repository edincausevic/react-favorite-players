import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import Display1 from '../Display/Display1';
import Chips1 from '../Chips/Chips1';
import PushContentDown from '../Push/PushContentDown';

// service
import SKILL_NAMES from '../../services/localData';

// hoc
import NoWrap from '../../hoc/noWrap';

const Card1Style = styled.div`
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;

  span {
    margin: 10px;
    display: inline-block;
  }
`


class Card1 extends Component {
  
  renderDisplay = () => {
    
    if ( this.props.player ) {
      return <Display1 name={ this.props.player.name } 
                    offense={ this.props.player.offense } 
                    defense={ this.props.player.defense }
                    image={ this.props.player.img}/>
    }
  }

  renderAllChips = () => { 
    if ( this.props.player ) {

      const skills = this.props.player.skills; 
      // fix names
      const newNameSkills = skills.map((player, i) => {
         return { skillName: SKILL_NAMES[i].name, skill: player.skill };
      })
      
      const chips = newNameSkills.map(skill => {
        return <Chips1 name={ skill.skillName } 
                       value={ skill.skill }
                       key={ skill.skillName }/>;
      })
 
      return chips;
    }
  }

  render() {
    
    return (
      <NoWrap>
        <Card1Style>
          { this.renderDisplay() }
          <div>
            { this.renderAllChips() }
          </div>
        </Card1Style>
        <PushContentDown/>
      </NoWrap>
    );
  }
}

Card1.propType = {
  player: PropTypes.object
}

export default Card1;