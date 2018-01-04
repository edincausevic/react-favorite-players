import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// icon
import FaAlignJustify from 'react-icons/lib/fa/align-justify';
// style
import { breakSmall } from '../../style/variables';

const MobMenuBtnStyle = styled.span`
  display: none;
  font-size: 150%;
  padding: 15px;
  cursor: pointer;
  
  @media (max-width: ${breakSmall}) {
    display: inline-block;
    padding: 17px;
  }
`

const MobMenuBtn = props => {
  const { clicked } = props;

  return(
    <MobMenuBtnStyle onClick={ clicked }>
      <FaAlignJustify/>
    </MobMenuBtnStyle>
  )
}

MobMenuBtn.propTypes = { clicked: PropTypes.func.isRequired } 

export default MobMenuBtn;