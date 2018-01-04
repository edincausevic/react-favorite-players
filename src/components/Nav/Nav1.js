import React, { Component } from 'react';
import styled from 'styled-components';

// hoc
import NoWrap from '../../hoc/noWrap';

// style 
import { Clr1, white } from '../../style/variables';
import { breakSmall } from '../../style/variables';

// styleComponents
import { Row } from '../../styleComponents/Row';
import { ClearFix } from '../../styleComponents/ClearFix';
import { FloatRight } from '../../styleComponents/FloatRight';

// components
import Logo1 from '../Logo/Logo1';
import Btn1 from '../Button/Btn1';
import MobMenuBtn from '../Button/MobMenu';
import PushContentDown from '../Push/PushContentDown';


const NavStyle = styled.header`

  width: 100%;
  background-color: ${Clr1};
  color: ${white};
  margin-bottom: 40px;
  position: fixed;
  top: 0;
  z-index: 5;

  .toggleMenu {
    right: 0px;
  }

  @media (max-width: ${breakSmall}) {
    nav {
      position: fixed;
      right: -600px;
      top: 4.2rem;
      box-shadow: 4px 3px 6px rgba(0, 0, 0, 0.27);
      transition: right 0.5s ease-in-out;
      a {
        width: 100%;
        padding: 19px 100px;
        background: ${Clr1};
      }
    }
  }
`


class Nav extends Component {
  state = {
    menuActive: '/',
    toggle: false
  }

  componentWillMount() {
    this.setState({menuActive: window.location.pathname})
  }

  toggleMenu = () => {
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    const { menuActive, toggle } = this.state;

    return (
      <NoWrap>
        <PushContentDown height="100px"/>
        <NavStyle>
          <Row>
            <ClearFix>
              <Logo1 path="/">Favorite Player</Logo1>
              <FloatRight>
                <MobMenuBtn clicked={this.toggleMenu}/>
                <nav className={toggle ? 'toggleMenu' : null}>
                  <Btn1 path="/" active={menuActive === '/'}>Home</Btn1>
                  <Btn1 path="/add-player" active={menuActive === '/add-player'}>Add Player</Btn1>
                </nav>
              </FloatRight>
            </ClearFix>
          </Row>
        </NavStyle>
      </NoWrap>
    );
  }
}

export default Nav;