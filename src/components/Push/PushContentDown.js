import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



export const PushContentDownStyle = styled.div`
  width: 100%;
`

const PushContentDown = props => (
  <PushContentDownStyle style={{height: props.height}}/>
)

PushContentDown.propTypes = {
  height: PropTypes.string.isRequired
};

PushContentDown.defaultProps = {
  height: '30px'
}

export default PushContentDown;