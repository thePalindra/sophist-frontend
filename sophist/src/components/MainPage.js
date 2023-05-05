import * as React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Form from "./Form";
import '../styles/MainPage.css';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: "10px" ,
    p: 4,
  };
  


export default function Default() {
    let navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);



    return (
        <>  
            <div className = "mainDiv">

                <div>

                    <Typography className="headerMainPage" id="modal-modal-title" variant="h1" component="h2">
                        The Sophist Game
                    </Typography>
                    <Button 
                        size="large"
                        variant="contained" 
                        style={{
                            width: "500px",
                            height: "80px",
                            fontSize: "35px",
                            fontWeight: "bold",
                            marginTop:"5%",
                            marginBottom: "5%"
                        }}
                        onClick={(handleOpen)}>
                        Create Room
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description">
                        <div>
                        <Box sx={style}>
                            <Typography className= "createTypo" variant="h5" component="h2" fontSize={32} fontWeight={"bold"} >
                                Choose your Name
                            </Typography>
                            <div className= "createForm">  
                                <TextField  id="outlined-basic" label="Insert Name" variant="outlined" />
                            </div>
                            <div className= "createButton">  
                            <Button size="large" variant="contained" onClick={() => {
                                navigate(`/session/1`)
                            } }>
                                Create Room
                            </Button>
                            </div>
                        </Box>    
                            
                        </div>    
                    </Modal>
                 

                </div>

                        
                <div >
                    <Button 
                        size="large"
                        variant="contained" 
                        style={{
                            width: "500px",
                            height: "80px",
                            marginBottom: "2%",
                            fontSize: "35px",
                            fontWeight: "bold"
                        }}
                        onClick={(handleOpen2)}>
                        Join Room
                    </Button>
                    <Modal
                        open={open2}
                        onClose={handleClose2}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description">
                        <div>
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                O vale é chato
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Annoying fuck
                            </Typography>
                        </Box>    
                            
                        </div>    
                    </Modal>
                </div>        
            </div >    

        </>
    )
}