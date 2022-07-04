import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Constant from './Constant';

/**
 * Este compoenente renderiza el modal para ver las apuestas del usuario
 * Se usan hooks setList() para actualizar el estado del componente que renderiza la lista de selecciones del usuario
 * setOpen para abrir el modal y acceder a la lista
 * 
 * Dependiendo de la cantidad de selecciones del usuario, se renderiza un parrafo informando sus apuestas
 * y la opcion de quitar esta apuesta de la lista,
 * en el estado 'lista' se retornan los componentes a renderizar de la lista
 * 
 * el metodo deleteItem permite cnsultar si el evento existe en el array de selecciones y lo elimina
 * usando el metodo Constant.deleteList() desde el archivo Constant
 */

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

export default function ModalBets() {

  const [getList,setList] = React.useState(Constant.getList());
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setList(Constant.getList());
    setOpen(true);
    selectionUser();
  }
  const handleClose = () => setOpen(false);
  const [listas,setListas] = React.useState([]);

 /* React.useEffect(()=>{
    selectionUser();
  },[])*/

  const selectionUser = () =>{
    let selection = getList;
    console.log('Apuestas',selection);
    let listaItems = [];
    if(selection !== null && selection[0] !== undefined){
      selection.map(item => {
        if(item.id === undefined){
          listaItems.push(
            <p key={1}>Has apostado estos eventos:</p>
          );
        }else{
          listaItems.push(
            <div key={item.id+2}>
              <p key={item.id}>{item.name + ': ' + item.price}<a style={{paddingLeft:"25%",color:'red',cursor:"pointer"}} key={item.id+1} onClick={(e) => {deleteItem(item.seccion,e)}}>{"Quitar (-)"}</a></p>              
            </div>
          ); 
        }
      })
    }else{
      listaItems.push(
        <p key={1}>Aun no haces tu Apuesta? ¡Animate!</p>
      );
    }
    setListas(listaItems)
  }

  function deleteItem(item){
    const itemsExist =  Constant.getList();

    if(itemsExist !== null){
        let exit = false;
        itemsExist.map(items    =>  {
            if(items.seccion === item)
                exit = true
        });
        if(exit === true){
            Constant.deleteList(item);
            setList(Constant.getList());
            console.log('item Eliminado',item);
            console.log('array despues - ',Constant.getList())
            exit    =   false;
            handleClose();
        }
    }

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
