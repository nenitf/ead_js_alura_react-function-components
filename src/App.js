import React, { Component } from 'react'
import { FormularioCadastro } from './components/FormularioCadastro/FormularioCadastro'
import './App.css';
import 'fontsource-roboto'

import { Container, Typography } from '@material-ui/core'
class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <Typography
          variant="h3"
          align="center"
          component="h1"
        >
          Formulário de cadastro
        </Typography>
        <FormularioCadastro
          aoEnviar={aoEnviarForm}
          validarCPF={validarCPF}
        />
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados)
}

function validarCPF(cpf){
  if(cpf.length != 11){
    return {valido: false, texto:"CPF deve ter 11 dígitos"}
  }

  return {valido: true, texto:""}
}

export default App;
