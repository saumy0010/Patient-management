import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AppBar from '../User/nav-patient';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EditIcon from '@mui/icons-material/Edit';


export default function MultilineTextFields() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [dose, setDose] = React.useState('');

  const handleDose = (event) => {
    setDose(event.target.value);
  };

  return (
      <div>
          <AppBar />

          <Typography variant="h4" color="inherit" component="div" 
            sx={{textAlign: 'center', marginTop: '50px'}}>
                Prescription
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
          label="+ Medicines"
          multiline
          fullWidth
          rows={4}
        />
      </div>
      <br />

      <div>
      <FormControl sx={{ m: 1, minWidth: 100 }}>

       
        <InputLabel id="demo-simple-select-helper-label">Morning</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={dose}
          label="Dose"
          onChange={handleDose}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={0}>Zero</MenuItem>
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
        </Select>
      </FormControl>


      <FormControl sx={{ m: 1, minWidth: 110 }}>
        <InputLabel id="demo-simple-select-helper-label">Afternoon</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={dose}
          label="Dose"
          onChange={handleDose}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={0}>Zero</MenuItem>
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-helper-label">Evening</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={dose}
          label="Dose"
          onChange={handleDose}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={0}>Zero</MenuItem>
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
        </Select>
      </FormControl>
      

      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-helper-label">Night</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={dose}
          label="Dose"
          onChange={handleDose}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={0}>Zero</MenuItem>
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={2}>Two</MenuItem>
        </Select>
      </FormControl>
    </div>
     
     <br />

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
