import React from "react"
import TextField from '@mui/material/TextField';


export default function Form() {
    return (
        <div style={{ 
            paddingTop: "10%",
            position: "relative",
            background: "rgba(256, 256, 256, 0.90)",
            height: "10%",
            width:"100%",
            display: "flex",
            justifyContent: "center"}}>

            <TextField id="outlined-basic" label="Insert Name" variant="outlined" />
        </div>
    )
}