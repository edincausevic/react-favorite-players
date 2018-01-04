import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// style
import { white, Clr1L, Clr1D } from '../../style/variables';


const B1Style = styled.span`
  vertical-align: 4px;
  cursor: pointer;
  
  a {
    transition: all 0.2s ease-in-out;
    color: ${white};
    padding: 23px;
    display: inline-block;

    &:active {
      color: ${white};
    }
    &:hover {
      background: ${Clr1L};
    }
  }
`

const LinkActive = {
  backgroundColor: Clr1D
}

const B1 = props => {
  const { path, active, children } = props;

  return(
    <B1Style>
      <Link to={ path } style={ active ? LinkActive : null }>
        { children }
      </Link>
    </B1Style>
  )
}

B1.propTypes = {
  path: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.string.isRequired
}

B1.defaultProps = {
  path: '#',
  children: 'Link'
}

export default B1;