import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../App.css';
import { CardMedia } from "@mui/material";
import img1 from '../img/img1.jpg'


export default function EventList(props){
    const{name,markets } = props;

    function onClickButton(item){
        console.log('price',item.price);

    }

    if(markets && markets.length > 0){
        let selections = [];
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
        })
        
        return (
                <Card className="item" sx={{ minWidth: 345 }}>                  
                <CardMedia
                    component="img"
                    height="194"
                    src={img1}
                />   
                {markets.map(item => (
                    <CardContent key = {item.id}>
                        <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                        </Typography>
                    </CardContent>

                ))}      
                
                <CardActions>
                {final[1].map(item => (
                    <Button key = {item.id} variant="contained" size="large" 
                            onClick={(e) => onClickButton(item,e)}>{item.name}</Button>

                ))}
                </CardActions>
                </Card>
          );
    }else{
        return null
    }

}