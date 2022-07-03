import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../App.css';
import { CardMedia } from "@mui/material";
import img1 from '../img/img1.jpg'
import ButtonsActions from "./ButtnsActions";


export default function EventList(props){
    const{name,markets } = props;

    function onClickButton(item){
        console.log('price',item.price);

    }

    const ReturnButtons = (selections) => {
        let mensaje = JSON.stringify(selections);
        let Buttons = [];
        selections.map(item => {
            <ButtonsActions

            />
        })
        return mensaje
    }

    if(markets && markets.length > 0){
      /*  let selections = [];
        markets.forEach(element => {
            selections[element.selections.id]=element.selections;
        });
        for (let index = 0; index < markets.length; index++) {
            if(markets[index].selections)
                selections.push( markets[index].selections);            
        }

        let final = [];
        selections.map(item =>{
            let count = 0
            count++
            final[count] = item
        })*/
        
        return (
                <Card style={{backgroundColor: "grey"}} variant="outlined" className="item" sx={{ minWidth: 345 }}>  
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