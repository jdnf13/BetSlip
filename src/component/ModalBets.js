import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalBets(props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    //window.location.reload();
  }
  const handleClose = () => setOpen(false);
  const [listas,setListas] = React.useState([]);

  React.useEffect(()=>{
    selectionUser();
  },[])

  const selectionUser = () =>{
    let selection = localStorage.getItem("selection")?JSON.parse(localStorage.getItem("selection")):[]
    let lista = selection.toString();    

    let listaItems = [];
    if(selection.length > 0){
      selection.map(item => {
        if(item.id === undefined){
          listaItems.push(
            <p key={1}>Lo Siento, seguimos progresando en esto...</p>
          );
        }else{
          listaItems.push(
            <p key={item.id}>{item.name + ': ' + item.price}</p>
          ); 
        }
      })
    }
    setListas(listaItems)
  }



  return (
    <div>
        <IconButton onClick={handleOpen} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp"/>
        </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {localStorage.getItem("selection")?
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Tus Apuestas
            </Typography>
              {listas}
          </Box>
        </Fade>
        :
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Aun no haces tu Apuesta?
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              ¡Animate!
            </Typography>
          </Box>
        </Fade>
        }
      </Modal>
    </div>
  );
}
