import { useState } from 'react'
import {
  TextField,
  Button,
  Switch,
  FormControlLabel
} from '@material-ui/core'

export function FormularioCadastro({ aoEnviar }) {
  const [ nome, setNome ] = useState("")
  const [ sobrenome, setSobrenome ] = useState("")
  const [ cpf, setCpf ] = useState("")
  const [ promocoes, setPromocoes ] = useState(true)
  const [ novidades, setNovidades ] = useState(true)

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
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
            checked={promocoes}
            name="promocoes"
            color="primary"
            onChange={(e) => setPromocoes(e.target.checked)}
          />
        )}
      />


      <FormControlLabel
        label="Novidades"
        control={(
          <Switch
            checked={novidades}
            name="novidades"
            color="primary"
            onChange={(e) => setNovidades(e.target.checked)}
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
