import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import '../App.css';

export default function ButtonsActions(props){
    const {actions} = props;
    let color = 'error'
    let botones = [];
    const [colorBtn,setColor] = useState(color);
   

    const onClickButtn = (item) => {
        let bets = localStorage.getItem('selection')?JSON.parse(localStorage.getItem('selection')):[];
        let exist = false;
            
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
                localStorage.removeItem('selection');
            }

            //else
              //  bets = []
            //setColor("error");
        }

        if(bets.length > 0)      
            localStorage.setItem('selection',JSON.stringify(bets));

        let confirmItem = JSON.parse(localStorage.getItem('selection'));
        if(confirmItem.length && confirmItem[0].length)
            localStorage.removeItem('selection');
    }

    /**
     * '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
     */

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
            <Button style={{margin:"1em",width:"20em",}} color={id===null?colorBtn:color} key={item.id} variant="contained" size="large" onClick={(e) => onClickButtn(item,e)} >{item.name}</Button>
        )
    })


    
    return(
        <div style={{ marginLeft:"10em"}} className="containerButtons">
            {botones}
        </div>
    )
}
