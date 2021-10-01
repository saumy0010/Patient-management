import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AppBar from '../User/nav-patient';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';


export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  

  return (
      <div>
          <AppBar />

          <Typography variant="h4" color="inherit" component="div" 
            sx={{textAlign: 'center', marginTop: '50px'}}>
                Diagnosis
            </Typography>

    <Box component="form" sx={{ width: '100%', maxWidth: '100%',
             marginTop: '60px', paddingLeft: '15%', paddingRight: '15%'}} noValidate autoComplete="off" >
      <div>
         
        <TextField
          id="outlined-textarea"
          label="Tag"
          placeholder="Placeholder"
          multiline
          fullWidth
        />
        <br /> <br /> <br />
        <TextField
          id="outlined-multiline-static"
          label="Detail"
          multiline
          fullWidth
          rows={4}
        />
      </div>
      <br /> <br />

    <Fab variant="extended" color="primary" aria-label="add" sx={{ float: 'right' }}>  
        Add
        <AddIcon sx={{ mr: 1, ml: 1 }} />
      </Fab>
      <Fab color="secondary" aria-label="edit" sx={{ float: 'right', mr: 5 }}>
        <EditIcon />
      </Fab>
      <br /><br /><br />

    </Box>
    

</div>
        );
}
