import React from 'react';
import AppBar from '../User/nav-patient';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function FormData() {
    return (
        <div>
            <AppBar />
   
            <Typography variant="h3" color="inherit" component="div" 
            sx={{textAlign: 'center', marginTop: '50px'}}>
                Please fill up the form and wait in the Queue.
            </Typography>
        
            <Box sx={{ width: '100%', maxWidth: '100%',
             marginTop: '100px', paddingLeft: '15%', paddingRight: '15%'}} >
                <TextField fullWidth label="Name" id="fullWidth" />
                <br /><br />
                <TextField fullWidth label="Contact No." id="fullWidth" />
                <br /><br /><br />
                <Button variant="contained">Submit</Button>
            </Box>  
        </div>
    );
}

export default FormData;