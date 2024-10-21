import React from "react";
let initial = 0;

export default function NoPureComponent({}){
    const table = [];
    for(let i = 0; i < 5; i++){
        initial += 1;
        table.push(<li>item {initial}</li>)
    }
    return (
        <ul>
            {table}
        </ul>
    )   
}