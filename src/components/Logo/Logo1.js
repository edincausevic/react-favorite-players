import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// style 
import { white } from '../../style/variables';

// components/icon
import Icon1 from '../Icon/Icon1';

// styleComponents
import { Title1h2 } from '../../styleComponents/Titles';


const LogoStyle = styled.div`
  display: inline-block;

  a {
    padding: 17px 0px;
    color: ${white};
    display: block;
  }

  h2{
    display: inline-block;
  }
  
  svg {
    vertical-align: -4px!important;
    font-size: 1.75rem;
    margin-right: 9px;
  }
`

const Logo1 = props => {
  const { path, children } = props;

  return(
    <LogoStyle>
      <Link to={ path }>
        <Icon1/>
        <Title1h2>{ children }</Title1h2>
      </Link>
    </LogoStyle>
  )
}

Logo1.propTypes = { path: PropTypes.string }
Logo1.defaultProps = { children: PropTypes.string };

export default Logo1;