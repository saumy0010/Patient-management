import React from 'react';
import AppBar from '../User/nav-patient';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './log.css';

function Login() {
    return (
        <div>
            <AppBar />

            <Typography variant="h3" color="inherit" component="div" 
            sx={{textAlign: 'center', marginTop: '50px'}}>
                Please enter the Credentials.
            </Typography>
            
    <Box component="form" sx={{ '& .MuiTextField-root': { marginTop: 10, width: '300px', height: '20px' }, textAlign: 'center'}}
        noValidate autoComplete="off" >
      <div>
        <TextField
          id="outlined-required"
          label="Email"
        />

       <br />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx= {{ marginTop: '-100px'}}
        />
       
      </div>
    </Box>
    <br />
<div className="login">
<FormControl component="fieldset">
      <FormLabel component="legend">Login as </FormLabel>
      <RadioGroup row aria-label="login" name="row-radio-buttons-group" defaultValue="patient">
        
        <FormControlLabel value="patient" control={<Radio />} label="Patient" default />
        <FormControlLabel value="doctor" control={<Radio />} label="Doctor" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
<br />
      <Button variant="contained" color="success">
        Login
      </Button>
      
    </FormControl>
    
</div>
    
</div>
            

            
        
    );
}

export default Login;