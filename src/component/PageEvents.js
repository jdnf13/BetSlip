import React from "react";
import EventList from "./EventList";
import { Divider } from '@mui/material';

export default function PageEvents(){
    
    if(localStorage.getItem('data')){
        let data = JSON.parse(localStorage.getItem('data'));
        return (
            <Divider >
            {
                data.map(item => (
                    <EventList 
                        key     =   {item.id}
                        name    =   {item.name}
                        markets =   {item.markets}
                    ></EventList>
                  ))

            }
            </Divider>
        )
    }else{
        return (
            <Divider className="App-header">
                <EventList></EventList>
            </Divider>
          );
    }
}