import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ModalBets from './ModalBets';
const AppBarCustom = () => {




  return (
    <AppBar position="static">
      <Container maxWidth="xl"> 
        <Toolbar disableGutters>  
        <Typography>IRIDIAN TEST</Typography>       
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
