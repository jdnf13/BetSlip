import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import '../App.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Constant from "./Constant";



export default function ButtonsActions(props){
    const {actions,seccion} = props;
    let color = 'error'
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
                <Button style={{margin:"1em",width:"20em",}} color={color} key={item.id} variant="contained" size="small" onClick={(e) => onClickButtn(item,e)} >{item.name}</Button>
                
            </div>
        )
    })


    
    return(
        <div style={{ marginLeft:"10em"}} className="containerButtons">
            {botones}
            {select !== ''?<Stack onClose={handleClose} sx={{ width: '100%' }} spacing={2}>
            <Alert  severity="success">
                Apostaste en este Evento por ultima vez por {select}, para cambiar tu apuesta selecciona
            </Alert>
            </Stack>:null}
                        
        </div>
    )
}
