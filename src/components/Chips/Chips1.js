import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// style 
import { Clr1, Clr1D, white } from '../../style/variables';

const Chips1Style = styled.span` 
  background: ${Clr1};
  border-radius: 50px;
  color: ${white};
  padding-right: 12px;

  .chip-score {
    background: ${Clr1D};
    padding: 10px;
    border-radius: 50%;
    margin: 0;
    margin-right: 8px;
  }
`

const Chips1 = props => {
  
  const { name, value } = props;
 
  return (
    <Chips1Style className={ value === '-' ? 'hide' : 'show' }>
      <span className="chip-score">{ value }</span>
      { name }
    </Chips1Style>
  );
};

Chips1.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

Chips1.defaultProps = {
  name: 'Name',
  value: '-'
}

export default Chips1;