import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//style
import { Clr1, Clr2L, white } from '../../../style/variables';

// img
import DefaultImage from '../../../img/player-default.jpg';

// icon
import FaTrashO from 'react-icons/lib/fa/trash-o';


const ListItem1Style = styled.div`
  position: relative;

  div {
    padding: 8px; 
    border-bottom: 1px solid ${Clr2L};
    position: relative;
    transition: background 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      background: ${Clr2L}
    }
  }
  
  img {
    width: 40px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 14px;
  }

  strong {
    vertical-align: 15px;
  }

  .icon {
    position: absolute;
    right: 0;
    top: 14px;
    padding: 6px;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }
`

const active = {
  backgroundColor: Clr1,
  color: white
}

const activeIcon = {
  color: white
}

const ListItem1 = props => {
  const { children, 
          image, 
          activePlayer, 
          clicked,
          removePlayerModal } = props;

  return (
    <ListItem1Style>
      <div style={ activePlayer ? active : null }
            onClick={ clicked }>
        <img src={ image ? image : DefaultImage} alt={ children }/>
        <strong>{ children }</strong>
      </div>
      <span className="icon"
            style={ activePlayer ? activeIcon : null } 
            onClick={ removePlayerModal }>
        <FaTrashO/>
      </span>
    </ListItem1Style>
  );
};

ListItem1.propTypes = {
  children: PropTypes.string
};

ListItem1.defaultProps = {
  children: 'List item name'
}

export default ListItem1;