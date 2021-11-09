import React, { Component } from 'react';
import './Foto.css';
 
class Foto extends Component {
    render(){
      
      let img = 'https://avatars.githubusercontent.com/u/57684219?s=400&u=ef40ae0b8fdfc0ce095411773135a96de1cdbc60&v=4';
      
      return(
        <img src={img} width={200} height={200}/>   
      );
    }
  }
 
export default Foto;
