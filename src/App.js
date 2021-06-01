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
        <FormularioCadastro aoEnviar={aoEnviarForm}/>
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados)
}

export default App;
