import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// image 
import PlayerDefaultImage from '../../img/player-default.jpg'

// style
import { white } from '../../style/variables';

// styleComponents
import { Title1h2 } from '../../styleComponents/Titles';



const Display1Style = styled.div`
  position: relative;

  img { 
    width: 100%; 
    display: block;
  }

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.40);
    width: 100%;
    color: ${white};
    padding: 14px 26px;
  }
`


const Display1 = props => {
  
  const { name, offense, defense, image } = props;
  console.log(image)
  return (
      <Display1Style>
        <img src={image ? image : PlayerDefaultImage } alt="Player" />
        <div className={ name ? 'show' : 'hide' }>
          <Title1h2>{ name }</Title1h2>
          <p>Offense: { offense } Defense: { defense }</p>
        </div>
      </Display1Style>
  );
};

Display1.propTypes = {
  name: PropTypes.string,
  offense: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  defense: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

export default Display1;