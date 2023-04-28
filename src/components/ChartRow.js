import React from 'react';


function ChartRow(props){
    console.log(props);
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.email}</td>
            <td><a href={`http://localhost:3001${props.detail}`}>{props.detail}</a></td>
        </tr>
    )
}


export default ChartRow;