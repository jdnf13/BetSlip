import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import '../App.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Constant from "./Constant";

/**
 * 
 * @param {actions,seccion} props Este componente recibe por props los parametros de los botones que se renderizan
 *  
 * @returns y retorna la cantidad de botones segun el array selections
 * 
 * Se usan hooks para actualizar el estado del mensaje con la informacion del item seleccionado por el usuario
 * con cada evento click en los botones se añade o actualiza la seccion del usuario desde la funcio onClickButtn
 * la cual recibe el array del item y el evento
 */

export default function ButtonsActions(props){
    const {actions,seccion} = props;
    let color = 'success'
    let botones = [];
    const [select,setSelect] = useState('');


   const handleClose    =   ()  =>  {
    setSelect('');
   }
   

    const onClickButtn = (item) => {
        const itemsExist =  Constant.getList();
        const id = item.id;
        const name=item.name
        const price=item.price
        const seccion =item.seccion;
        let itemAdd =   [];
        itemAdd["id"] = id
        itemAdd["name"] = name
        itemAdd["price"] = price
        itemAdd["seccion"] = seccion
        //Constant.setList(itemAdd);
        if(itemsExist !== null){
            let exit = false;
            itemsExist.map(items    =>  {
                if(items.seccion === itemAdd.seccion)
                    exit = true
            });
            if(exit === true){
                Constant.upList(itemAdd);
                exit    =   false;
            }else{
                Constant.setList(itemAdd);
                exit = false;
            }
        }else{
            Constant.setList(itemAdd);
        }       
        setSelect(item.name);
        localStorage.setItem('selection',JSON.stringify('apuestas'));
    }



    actions.map(item =>{
            item["seccion"] = seccion;
            botones.push(
            <div key={item.id+2}>
                <Button style={{margin:"1em",width:"20em", marginLeft:'-20%',width:"100%"}} color={color} key={item.id} variant="contained" size="small" onClick={(e) => onClickButtn(item,e)} >{item.name}</Button>
                
            </div>
        )
    })


    
    return(
        <div style={{ marginLeft:"10em"}} className="containerButtons">
            {botones}
            {select !== ''?<Stack onClose={handleClose} sx={{ width: '100%' }} spacing={2} style={{marginLeft:'-20%'}}>
            <Alert  severity="success">
                Apostaste en este Evento por ultima vez por {select}, para cambiar tu apuesta selecciona
            </Alert>
            </Stack>:null}
                        
        </div>
    )
}
