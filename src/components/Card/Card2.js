import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';

//components
import Display1 from '../Display/Display1';
import Chips1 from '../Chips/Chips1';

// style
import { Clr1 } from '../../style/variables';

// icons
import FaCheckCircleO from 'react-icons/lib/fa/check-circle-o';

const Card2Style = styled.div`
  .player-added {
    font-size: 200%;
    color: ${Clr1};
  }
`

class Card2 extends Component {

  render() {
    const { display, formSubmited } = this.props;
  
  return (
    <Card2Style className={ formSubmited ? 'show' : 'hide' }>
      { display ? 
        <Display1 name={ display.name }
                  offense={ display.offense }
                  defense={ display.defense }
                  image={ display.img } />         
      : null }
      <div className="player-added">
        <FaCheckCircleO/> Player added
      </div>
    </Card2Style>
  );
  }
}

export default Card2;