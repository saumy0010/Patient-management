import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Container, Row, Col } from 'react-bootstrap';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <div> 
        <Container>
            <Row>
                <Col><Card sx={{ maxWidth: 300, minWidth: 300, marginTop: '30px', marginLeft: '5px', backgroundColor: '#e6f2ff' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Josh Buttler"
        subheader="September 14, 2021"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Patient overview
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card></Col>

    <Col><Card sx={{ maxWidth: 300, minWidth: 300, marginTop: '30px', marginLeft: '5px',backgroundColor: '#e6f2ff' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Ben stokes"
        subheader="September 15, 2021"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Patient overview
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card></Col>


    <Col><Card sx={{ maxWidth: 300, minWidth: 300, marginTop: '30px', marginLeft: '5px',backgroundColor: '#e6f2ff' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Alex hales"
        subheader="August 25, 2022"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Patient overview
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card></Col>


        </Row>
</Container>
<br /><br />        
     
</div>
    
  );
}
