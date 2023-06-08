import { Box, Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react'
import { useLocation, useNavigate } from 'react-router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StockDetails = () => {

    const { state } = useLocation();
    const navigate = useNavigate();

    const { StockDetails } = state;
    console.log("🚀 ~ file: StockDetails.jsx:8 ~ StockDetails ~ StockDetails:", StockDetails)

    return (
        <div style={{
            margin: 'auto',
            width: '50%',
            height: '50%',
            padding: '30px'
        }}>
            <Button variant="contained" endIcon={<ArrowBackIcon />} onClick={() => { navigate('/') }}>
                Back
            </Button>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={`Date : ${StockDetails.date}`} />
                        </ListItemButton>

                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={`Open : ${StockDetails['1. open']}`} />
                        </ListItemButton>

                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={`High : ${StockDetails['2. high']}`} />
                        </ListItemButton>

                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={`Low : ${StockDetails['3. low']}`} />
                        </ListItemButton>

                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={`Close : ${StockDetails['4. close']}`} />
                        </ListItemButton>

                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary={`Volume : ${StockDetails['5. volume']}`} />
                        </ListItemButton>

                    </ListItem>
                </List>
            </Box>
        </div>
    )
}

export default StockDetails