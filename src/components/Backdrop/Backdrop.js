import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BackdropStyle = styled.div`
  z-index: 6;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Backdrop = props => (
  <BackdropStyle className={ props.toggle ? 'show' : 'hide'}
                 onClick={ props.hideBackdrop }/>
)

Backdrop.propTypes = {
  toggle: PropTypes.bool
};

export default Backdrop;