import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './patient.css';

function TextField() {
  alert('Chota sa prank hua hai... hui hui hui');

}

function AddButton() {
  return (
      <div className="input">
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="primary" aria-label="add" onClick={TextField}>
                <AddIcon />
            </Fab>
        </Box>
      </div>
   
  );
}

export default AddButton;