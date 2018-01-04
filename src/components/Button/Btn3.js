import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Btn3Style = styled.button`
  padding: 10px;
  border: none;
  color: white;
  margin-left: 10px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
`


const Btn3 = props => {
  const { danger, clicked, children } = props;
  return (
    <Btn3Style className={ danger ? 'danger' : 'success'} 
              onClick={ clicked }>
      { children }
    </Btn3Style>
  );
};

Btn3.propTypes = {
  danger: PropTypes.bool,
  clicked: PropTypes.func,
  children: PropTypes.string
};

Btn3.defaultProps = {
  children: 'Default'
}

export default Btn3;