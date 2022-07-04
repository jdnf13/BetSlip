import {React,useEffect,useState} from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import EventList from './EventList';

/**
 * 
 * @returns Este componente consume el servicio suministrado para la prueba
 * se implementa el hook useEffect para permitir que react actualice su estado despues de renderizar
 * esto para poder renderizar en pantalla los eventos despues de la respuesta del servicio
 * si este falla o no retorna eventos, el DOM no colapsa, sino que muestra el return de acuerdo a la respuesta
 * del mismo
 */

export default function Service() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("http://www.mocky.io/v2/59f08692310000b4130e9f71")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            localStorage.setItem('selection',JSON.stringify(result));
          },
          //
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">
                <AlertTitle>{error.message}</AlertTitle>
                Error Obteniendo Data — <strong>Error!</strong>
            </Alert>
        </Stack>
      );
    } else if (!isLoaded) {
        return (
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="success">
                    <AlertTitle>{'Loading...'}</AlertTitle>
                    Loading data — <strong>progress!</strong>
                </Alert>
            </Stack>
        );
    } else {
        return(
          
                items.map(item => (
                    <EventList 
                        key     =   {item.id}
                        name    =   {item.name}
                        markets =   {item.markets}
                    ></EventList>
                ))

            
        )
    }
 }

 /**
  * import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxSx() {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
}
  */
  