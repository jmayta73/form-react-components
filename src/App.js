

import './App.css';
import { Container } from '@mui/material';

import FormSignUp from './components/FormSignUp';
import Typography from '@mui/material/Typography';
function App() {
  return (
    <Container component="section" maxWidth="sm">
      <Typography variant="h3" align='center'>  <h1>Formulario Registro</h1> </Typography>
      <FormSignUp />

    </Container>
  );
}

export default App;  
