import * as React from 'react';

import Button from '@mui/material/Button';


export default function Default() {
    return (
        <>
            <div
                style={{ 
                    margin: "auto",
                    position: "relative",
                    background: "rgba(256, 256, 256, 0.90)",
                    height: "100%",
                    width:"100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"}}>
                <Button 
                    size="large"
                    variant="contained" 
                    style={{
                        width: "250px"
                    }}
                    onClick={()=> {

                    }}>
                    Create Private Room
                </Button>
            </div>
        </>
    )
}