import { useState, useEffect } from "react"
import  Button  from "@mui/material/Button"
import  TextField  from "@mui/material/TextField"
    import { FormControlLabel, Switch } from "@mui/material"
import FormGroup from "@mui/material/FormGroup"

function FormSignUp(){

     const [name, setName] = useState("HARLAND")   
    useEffect(()=>{
        console.log("name cambio",name)
    },[name])
    
    return (<form>
        <label >Nombres</label>
        <TextField type="text" id="name" label="Nombres"  variant="outlined" margin="normal" fullWidth
            onChange={(e)=>{
              
                setName(e.target.value)
               
            }}
            value={name}
        />
        <label >Apellidos</label>
        <TextField type="text" id="lastname" label="Apellidos"  variant="outlined" margin="normal" fullWidth/>
        <label >Correo electronico</label>
        <TextField type="text" id="email" label="Email"  variant="outlined" margin="normal" fullWidth/>      
        <FormGroup>
            <FormControlLabel control={<Switch  />} label="Promociones"/>

            <FormControlLabel control={<Switch  />} label="Novedades"/>

        </FormGroup>
        
        
        
        <Button variant="contained">Registrarse</Button>
        </form>)
}

export default FormSignUp