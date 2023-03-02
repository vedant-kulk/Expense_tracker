import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyle from './styles';


const CustomizedSnackbar = ({open,setOpen}) => {
    const classes=useStyle();
    const handleclose=(event,reason)=>{
            if(reason==='clickaway') return;
            setOpen(false);
    }
  return (
    <div className={classes.root}>
        <Snackbar anchorOrigin={{vertical:'top',horizontal:'right'}} open={open} autoHideDuration={3000} onClose={handleclose} >
                <MuiAlert onClose={handleclose} severity="success" elevation={6} variant="filled">
                    Transaction Successfully added    
                </MuiAlert> 
        </Snackbar>
    </div>
  )
}

export default CustomizedSnackbar