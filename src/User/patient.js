import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './patient.css';



function LinkTab(props) {
  return (
  
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}


export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Box className="flex-container">
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab className="flex" label="Overview" href="#" />
        <LinkTab className="flex" label="Diagnosis" href="#" />
        <LinkTab className="flex" label="Medicines" href="#" />
        <LinkTab className="flex" sx={{ marginLeft: '-20px'}}label="Labs" href="#" />
      </Tabs>
    </Box>
  );
}
