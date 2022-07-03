import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import '../App.css';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export default function ButtonsActions(props){
    const {actions} = props;
    let color = 'error'
    let botones = [];
    const [select,setSelect] = useState('');
    const [disable,setDisable] = useState(false);


   const handleClose    =   ()  =>  {
    setSelect('');
   }
   

    const onClickButtn = (item) => {
        let bets = localStorage.getItem('selection')?JSON.parse(localStorage.getItem('selection')):[];
        let exist = false;
        setSelect(item.name);
        setDisable(true);
        localStorage.removeItem('selection');
        bets.map(ids=>{
            if(ids.id === item.id)
                exist = true;
        });
        if(exist === false){
            bets.push(item); 
            //setColor("success");           
        }else{
            let aux = [];            
            bets.map(exist =>{
                if(exist.id !== item.id)
                    aux.push(exist);                
            });

            if(aux.length > 0){
                bets = [];
                bets.push(aux);
            }else{
                bets = [];
                window.location.reload();

            }
            localStorage.removeItem('selection');
        }

        if(bets.length > 0)      
            localStorage.setItem('selection',JSON.stringify(bets));
    }

    const onClickReNew =    (e) => {
        setDisable(false);
        setSelect('');
    } 

    actions.map(item =>{
        let getId = localStorage.getItem('selection')?JSON.parse(localStorage.getItem('selection')):null;
        let id = null;        
        if(getId !== null){
            getId.map(ids => {
                if(ids.id === item.id)
                    id = item.id
            });
        }
        if(id !== null)
            color = "success";
        else
            color = "error";
            botones.push(
            <div key={item.id+2}>
                <Button disabled={disable} style={{margin:"1em",width:"20em",}} color={color} key={item.id} variant="contained" size="small" onClick={(e) => onClickButtn(item,e)} >{item.name}</Button>
                
            </div>
        )
    })


    
    return(
        <div style={{ marginLeft:"10em"}} className="containerButtons">
            {botones}
            {select !== ''?<Stack onClose={handleClose} sx={{ width: '100%' }} spacing={2}>
            <Alert  severity="success">
                Seleccionaste {select}, para cambiar tu apuesta selecciona Renovar
            </Alert>
            </Stack>:null}
            <AutorenewIcon style={{paddingLeft:'85%'}} onClick={(e) => onClickReNew(e)}/>
            <p style={{paddingLeft:'79%'}} onClick={(e) => onClickReNew(e)} >Renovar</p>            
        </div>
    )
}
