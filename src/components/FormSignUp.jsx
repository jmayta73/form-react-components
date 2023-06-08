import { useState } from "react"
import  Button  from "@mui/material/Button"
import  TextField  from "@mui/material/TextField"
    import { FormControlLabel, Switch } from "@mui/material"
import FormGroup from "@mui/material/FormGroup"
import {FormControl} from "@mui/material"

function FormSignUp({handleSubmit}){
       
     const [name, setName] = useState("")   
     const [lastName, setLastName] =  useState("")
     const [email, setEmail]= useState("")
    const [prom, setProm]= useState(true)
    const [nov, setNov] = useState(false)
    return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        handleSubmit({name,lastName,email,prom,nov})
    }}>
        <label >Nombres</label>
        <TextField type="text" id="name" label="Nombres"  variant="outlined" margin="normal" fullWidth
            onChange={(e)=>setName(e.target.value)}
            value={name}
        />
        <label >Apellidos</label>
        <TextField type="text" id="lastname" label="Apellidos"  variant="outlined" margin="normal" fullWidth
            onChange={(e)=> setLastName(e.target.value)}
            value={lastName}
        />
        <label >Correo electronico</label>
        <TextField type="text" id="email" label="Email"  variant="outlined" margin="normal" fullWidth
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
        />      
        <FormGroup>
            <FormControlLabel control={<Switch 
                checked={prom}
                onChange={(e)=>setProm(e.target.checked)}
            />} label="Promociones"/>

            <FormControlLabel control={<Switch 
                    checked={nov}
                    onChange={(e)=>setNov(e.target.checked)}
            />} label="Novedades"/>

        </FormGroup>
        
        
        
        <Button variant="contained" type="submit">Registrarse</Button>
        </form>)
}

export default FormSignUp