import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../App.css';
import { CardMedia } from "@mui/material";
import img1 from '../img/img1.jpg'
import ButtonsActions from "./ButtnsActions";

/**
 * 
 * @param {name,markets} props Este componente recibe los parametros por props que se envian luego de consumir el servicio
 * @returns Estos parametros le permiter renderizar las Card de eventos si esta disponible para el usuario (si existen markets)
 */

export default function EventList(props){
    const{name,markets } = props;

    


    if(markets && markets.length > 0){
        
        return (
                <Card style={{backgroundColor: "grey",marginLeft:"1%",marginTop:"1%"}} variant="outlined" className="item" sx={{ minWidth: 345 }}>  
                <div className="containerCard">
                    <CardMedia
                        component="img"
                        height="194"
                        src={img1}
                    />   
                    <CardContent className="containerCard" key = {name}>
                        <Typography style={{textAlign: "center"}} gutterBottom variant="h5" component="div">
                        {name}
                        </Typography>
                    </CardContent>
                    {markets.map(item => (
                        <div key = {item.id+1} >
                            <CardActions className="itemCard" key = {item.id}>
                                {item.name}   
                                <ButtonsActions
                                    actions={item.selections}
                                    seccion={item.id}
                                />
                            </CardActions>
                            <hr key = {item.id+2}></hr>
                        </div>

                        
                    ))}                        
                </div>                
                </Card>
          );
    }else{
        return null
    }

}