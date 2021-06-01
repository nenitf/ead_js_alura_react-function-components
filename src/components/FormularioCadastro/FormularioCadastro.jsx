import { useState } from 'react'
import {
  TextField,
  Button,
  Switch,
  FormControlLabel
} from '@material-ui/core'

export function FormularioCadastro() {
  const [ nome, setNome ] = useState("")
  const [ sobrenome, setSobrenome ] = useState("")
  const [ cpf, setCpf ] = useState("")

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      console.log({ nome, sobrenome, cpf })
      }}>
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={sobrenome}
        onChange={(e) => setSobrenome(e.target.value)}
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />

      <FormControlLabel
        label="Promoções"
        control={(
          <Switch
            name="promocoes"
            color="primary"
            defaultChecked
          />
        )}
      />


      <FormControlLabel
        label="Novidades"
        control={(
          <Switch
            name="novidades"
            color="primary"
            defaultChecked
          />
        )}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Cadastrar
      </Button>
    </form>
  )
}
