import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container, Row, Col } from 'react-bootstrap';
import AddButton from './input';


export default function BasicCard() {
  return (
    <div> 
        <Container>
            <Row>
                <Col><Card sx={{ maxWidth: 300, minWidth: 300, marginTop: '30px', marginLeft: '5px' }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            Anxiety - GAD 7
                            </Typography>
                            <Typography variant="body2" sx={{marginTop: "10px"}}>
                            Albert came in Monday with a distinctive improvement We talked about his vacation last month 
                            <br />
                            </Typography>
                        </CardContent>  
                </Card></Col>

                <Col><Card sx={{ maxWidth: 300, minWidth: 300, marginTop: '30px',marginLeft: '5px' }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            Anxiety - GAD 7
                            </Typography>
                            <Typography variant="body2" sx={{marginTop: "10px"}}>
                            Albert came in Monday with a distinctive improvement We talked about his vacation last month 
                            <br />
                            </Typography>
                        </CardContent>  
                </Card></Col>

                <Col><Card sx={{ maxWidth: 300, minWidth: 300, marginTop: '30px', marginLeft: 'px' }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            Anxiety - GAD 7
                            </Typography>
                            <Typography variant="body2" sx={{marginTop: "10px"}}>
                            Albert came in Monday with a distinctive improvement We talked about his vacation last month 
                            <br />
                            </Typography>
                        </CardContent>  
                </Card></Col>

            </Row>
        </Container>
        
        <br/><br/>
        <AddButton/>
    </div>
    
  );
}
