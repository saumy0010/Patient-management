import React from 'react';
import AppBar from '../User/nav-patient';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import './doc.css';
import Card from './Cards.js';


function Doctor() {
    return (
        <div>
            <AppBar />
            <div className="user-doc">
                <Stack direction="row" spacing={4}>
                    <Avatar alt="Remy Sharp" src="/images/doc-icon.jpg" sx={{ width: 80, height: 80 }} />
                    <Typography variant="h4" color="inherit" 
                    sx={{ paddingTop: '15px' }}>
                        Dr. Starc
                    </Typography>
                    
                </Stack>
                
                   <Typography variant="p" color="inherit" component="div"
                   sx={{marginLeft: '110px', fontWeight: 'lighter'}}>
                        You have the following upcoming visits today
                   </Typography>
                   <br />
            </div>
            <br />
            <Card />
        </div>
    );
}

export default Doctor;