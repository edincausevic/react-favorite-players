import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// style
import { Clr1, Clr1D, white } from '../../style/variables';

const Btn2Style = styled.button`
  width: 100%;
  border: none;
  padding: 16px;
  font-weight: bold;
  background-color: ${Clr1D};
  color: ${white};
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${Clr1};
  }
`

const Btn2 = props => {
  const { children, clicked, toggle } = props;

  return (
    <Btn2Style onClick={ clicked }
               className={ !toggle ? 'show' : 'hide' }>
      { children }
    </Btn2Style>
  );
};

Btn2.propTypes = {
  children: PropTypes.string,
  clicked: PropTypes.func,
  toggle: PropTypes.bool
};

Btn2.defaultProps = {
  children: 'Default'
}

export default Btn2;