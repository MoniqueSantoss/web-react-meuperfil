import React, { Component } from 'react';
import './Conteudo.css';
 
class Conteudo extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: 'Meu Perfil'
    };
 
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(){
    this.setState({
      nome: 'Nome: Monique Mota',
      idade: 'Idade: 12/03/2003',
      Nacionalidade:'Nacionalidade: Brasileira',
      formacao: 'formacao: Curso em Análise e Desenvolvimento de Sistemas, ',
      formacao2: 'Cursando Ciência da Computação na UNIP',
      exp: 'Conhecimento básico em Python ,PHP,JAVA, JS, Node, HTML e CSS.',
      projeto: 'Projetos: https://github.com/peixes12'
    });
  }
 
  render(){
    return(
      <div>
        <center>
          <button onClick={this.entrar}>Entrar</button>
          <h1>{this.state.nome}</h1>
          <h3>{this.state.idade}</h3>
          <h3>{this.state.formacao}</h3>
          <h3>{this.state.formacao2}</h3>
          <h4>{this.state.exp}</h4>
          <h5>{this.state.projeto}</h5>
        </center>
      </div>
    );
  }
}
 
export default Conteudo;