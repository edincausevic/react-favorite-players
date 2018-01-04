import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// style
import { Clr1, Clr1D } from '../../style/variables';

// components
import Btn3 from '../Button/Btn3';

const Modal1Style = styled.div`
  position: fixed;
  top: -50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: ${Clr1};
  z-index: 7;
  color: white;
  transition: top 0.5s cubic-bezier(0.42, 0, 0.06, 1.3);

  div {
    width: 100%;
    background-color: ${Clr1D};
    padding: 15px;
    box-sizing: border-box;
  }

  span {
    padding: 20px;
    display: block;
  }
`

const slideDown = { top: '50%' };
const slideUp = { top: '-50%' };

const Modal1 = props => {
  const { toggle, hideModal, playerName, removePlayer } = props;

  return (
    <Modal1Style style={ toggle ? slideDown : slideUp }>
      <div>
        <strong>Remove { playerName }?</strong>
      </div>
      <span>Are you shure you want to delete { playerName }?</span>
      <div>
        <Btn3 danger clicked={ hideModal }>Cancle</Btn3>
        <Btn3 clicked={ removePlayer }>Remove</Btn3>
      </div>
    </Modal1Style>
  );
};

Modal1.propTypes = {
  toggle: PropTypes.bool,
  hideModal: PropTypes.func,
  removePlayer: PropTypes.func,
  playerName: PropTypes.string
};

export default Modal1;