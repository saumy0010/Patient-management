import React from 'react';
import LinkTab from './patient';
import Nav from './nav-patient';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './patient.css';
import Card from './card.js';


function UserInfo() {

    return (
        <div>
            <Nav/>

            <div className="user">
                <Stack direction="row" spacing={4}>
                    <Avatar alt="Remy Sharp" src="/images/user.jpg" sx={{ width: 80, height: 80 }} />
                    <h2 className="name">Ricky Ponting</h2>
                </Stack>
            </div>
            
            <LinkTab/>

            <div>
                <Card/>    
            </div>
        </div>
        
    );
}

export default UserInfo;