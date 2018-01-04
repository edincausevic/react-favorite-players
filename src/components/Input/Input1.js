import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input1Style = styled.input`

  width: 100%;
  padding: 7px;
`

const Input1 = props => {
  const { type, placeholder, onChange, value } = props;

  return (
    <Input1Style type={ type } 
                  placeholder={ placeholder }
                  onChange={ onChange }
                  value={value}/>
  );
};

Input1.defaultProps = {
  type: 'text'
}

Input1.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default Input1;