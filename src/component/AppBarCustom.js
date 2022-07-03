import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import ModalBets from './ModalBets';
const AppBarCustom = () => {

  const handleOpenUserMenu = (event) => {
    
  };



  return (
    <AppBar position="static">
      <Container maxWidth="xl"> 
        <Toolbar disableGutters>  
        <Typography>BETSLIP</Typography>       
          <Box style={{paddingLeft:"90%"}} sx={{ flexGrow: 0 }}>
              <ModalBets>
              </ModalBets>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarCustom;
