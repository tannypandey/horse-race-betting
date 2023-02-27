import React from 'react'
import {Typography, MenuItem,FormControl, Select, AppBar,Container, toolbarClasses, CssBaseline, CardContent} from '@mui/material';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Form from './signup';
//import Navbar from './navBar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
    

const App = () =>{
    //First bet
    const [horse, setHorse] = React.useState('');
  
    const handleChange = (event) => {
      setHorse(event.target.value);
    };

    //Second bet
    const [horse2, setHorse2] = React.useState('');
  
    const handleChange2 = (event) => {
      setHorse2(event.target.value);
    };

     return (
        <>
            {/* <div>
                <Form />
            </div> */}
            <CssBaseline />
            <AppBar position ='relative'>
                <toolbarClasses>
                    <Form/>
                </toolbarClasses>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth='sm'>
                        <Typography variant='h5' align= 'center' color='textPrimary' gutterBottom>
                            Horse Race Betting Application
                        </Typography>
                        <Typography variant='h7' align='center' color='textSecondary' paragraph>
                             Place your bet below. You only have one chance of switching your bet while the race is going on.
                        </Typography>
                    </Container>
                </div>
                <div align='center'>
                    <Container align='right'>
                    <FormControl sx={{minWidth:120}}>
                        <InputLabel id='first-bet'>Horse</InputLabel>
                        <Select
                            labelId="first-bet"
                            id="first-bet"
                            value={horse}
                            label="Horse"
                            onChange={handleChange}>
                            <MenuItem value={'Blue'}>Blue</MenuItem>
                            <MenuItem value={'Red'}>Red</MenuItem>
                        </Select>
                    </FormControl>
                    <br></br><br />
                    <Button variant = 'contained'>
                        Place bet and Start
                    </Button>
                    <br></br><br></br>
                    <FormControl sx={{minWidth:120}}>
                        <InputLabel id="second-bet">Change Horse</InputLabel>
                        <Select
                            labelId="second-bet"
                            id="second-bet"
                            value={horse2}
                            label="Horse2"
                            onChange={handleChange2}>
                            <MenuItem value={'Blue'}>Blue</MenuItem>
                            <MenuItem value={'Red'}>Red</MenuItem>
                        </Select>
                    </FormControl>
                    <br></br><br></br>
                    <Button variant = 'contained'>
                        Change Bet
                    </Button>
                    </Container>
                    <br></br><br></br>
                </div>
            </main>
        </>
    );
    }

export default App;