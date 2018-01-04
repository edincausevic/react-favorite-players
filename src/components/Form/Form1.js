import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// components
import Input1 from '../../components/Input/Input1';
import Btn2 from '../../components/Button/Btn2';


// style components 
import { ClearFix} from '../../styleComponents/ClearFix';


const Form1Style = styled.form`
  width: 100%;
  padding: 10px 0px;

  .form-skills {
    margin: 20px 0px;

    input {
      width: 50px;
      float: right;
      margin-bottom: 5px;
    }

    hr { 
      margin: 10px 0px;
      display: block;
    }
  }

  label {
    font-size: 140%;
  }

  button {
    margin-top: 20px;
  }
`

class Form1 extends Component {

  state = {
    player: {
      name: '',
      img: '',
      offense: '',
      defense: '',
      ballManipulation: '',
      kickingAbilities: '',
      passingAbilities: '',
      duelTackling: '',
      fieldCoverage: '',
      blockingAbilities: '',
      gameStrategy: '',
      playmakingRisks: '',
    },
    formError: false,
    imgUrl: false,
    submited: false
  }

  addPlayer = (e) => {
    e.preventDefault();

    this.setState({submited: true})

    const player = {
      name: '',
      img: '',
      offense: '',
      defense: '',
      ballManipulation: '',
      kickingAbilities: '',
      passingAbilities: '',
      duelTackling: '',
      fieldCoverage: '',
      blockingAbilities: '',
      gameStrategy: '',
      playmakingRisks: '',
    }

    

    const playerData = this.state.player;
    for (let key in playerData) {
      // check if img url is valid
      if ( key === 'img' ) {
        if (playerData[key]) {
          if( checkURL(playerData[key]) ) {    
            this.setState({imgUrl: true})
          }else {                                  
            this.setState({imgUrl: false})   
          }
        }
      }
      // check if form if filled out
      if (playerData[key] === '') { 
        this.setState({formError: true})
      }else {
        this.setState({formError: false})
      }
    }
    
    setTimeout(()=>{
      let skills = [];
      let playerData = {};
      // remake the original player object
      Object.entries(this.state.player).forEach(([key, val]) => {
        if ( key !== 'name' && key !== 'img' && key !== 'offense' && key !== 'defense') {
          let skill = {};
          skill[key] = val;
          skills.push(skill);
        }else {
          playerData[key] = val;
        }
      });
      playerData['skills'] = skills;

      // if valid add to db
      if (!this.state.formError && this.state.imgUrl) {
        axios.post('https://favorite-players.firebaseio.com/players.json', playerData)
          .then(response => {
            if(response.status === 200) {
              this.setState({
                player: player,
                formError: false,
                imgUrl: false,
                submited: false
              })
              this.props.formSubmited();
            }
          })
      }
    },300);
    
    function checkURL(url) {
      return(url.match(/\.(jpeg|jpg|gif|png|jpe)$/) != null);
    }
  }


  handlePlayerValue = (e, key) => {
    let newVal = this.state.player;
    newVal[key] = e.target.value;
    this.setState({player: newVal})
    this.props.playerDisplay(this.state.player);
    this.props.resetDisplay();
  }

  render() {
    const { player } = this.state;
    return (
      <Form1Style onSubmit={ this.addPlayer }>
      <label>Name</label>
      <Input1 type="text" 
              value={player.name} 
              onChange={ (e) => this.handlePlayerValue(e, 'name') }/>
      <label>Image</label>
      <Input1 type="text" 
              value={player.img}
              onChange={ (e) => this.handlePlayerValue(e, 'img') }/>
      <div className="form-skills">
        <ClearFix>
          <label>Offense</label>
          <Input1 type="number" 
                  value={player.offense}
                  onChange={ (e) => this.handlePlayerValue(e, 'offense') }/>
        </ClearFix>
        <ClearFix>
          <label>Defense</label>
          <Input1 type="number" 
                  value={player.defense}
                  onChange={ (e) => this.handlePlayerValue(e, 'defense') }/>
        </ClearFix>
        <hr/>
        <ClearFix>
          <label>Ball manipulation</label>
          <Input1 type="number" 
                  value={player.ballManipulation}
                  onChange={ (e) => this.handlePlayerValue(e, 'ballManipulation') }/>
        </ClearFix>
        <ClearFix>
          <label>Kicking abilities</label>
          <Input1 type="number" 
                  value={player.kickingAbilities}
                  onChange={ (e) => this.handlePlayerValue(e, 'kickingAbilities') }/>
        </ClearFix>
        <ClearFix>
          <label>Passing abilities</label>
          <Input1 type="number" 
                  value={player.passingAbilities}
                  onChange={ (e) => this.handlePlayerValue(e, 'passingAbilities') }/>
        </ClearFix>
        <ClearFix>
          <label>Duel tackling</label>
          <Input1 type="number" 
                  value={player.duelTackling}
                  onChange={ (e) => this.handlePlayerValue(e, 'duelTackling') }/>
        </ClearFix>
        <ClearFix>
          <label>Field coverage</label>
          <Input1 type="number"
                  value={player.fieldCoverage} 
                  onChange={ (e) => this.handlePlayerValue(e, 'fieldCoverage') }/>
        </ClearFix>
        <ClearFix>
          <label>Blocking abilities</label>
          <Input1 type="number"
                  value={player.blockingAbilities}  
                  onChange={ (e) => this.handlePlayerValue(e, 'blockingAbilities') }/>
        </ClearFix>
        <ClearFix>
          <label>Game strategy</label>
          <Input1 type="number" 
                  value={player.gameStrategy}
                  onChange={ (e) => this.handlePlayerValue(e, 'gameStrategy') }/>
        </ClearFix>
        <ClearFix>
          <label>Playmaking risks</label>
          <Input1 type="number" 
                  value={player.playmakingRisks}
                  onChange={ (e) => this.handlePlayerValue(e, 'playmakingRisks') }/>
        </ClearFix>
        <p className={ this.state.formError ? 'show' : 'hide' }>Please fill out the form!</p>
        <p className={ !this.state.imgUrl && this.state.submited ? 'show' : 'hide' }>Plese enter valid img url!</p>
        <Btn2 type="submit">Add Player</Btn2>
      </div>
    </Form1Style>
    )
  }   
};

export default Form1;