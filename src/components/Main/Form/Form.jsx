import React from 'react'
import { TextField,Typography,Grid,Button,FormControl,InputLabel,Select,MenuItem } from '@material-ui/core';
import UseStyle from './style';
const Form = () => {
    const classes=UseStyle();
  return (
    <Grid container spacint={2} >
        <Grid item xs={12}>
            <Typography align="center" varint="subtitle2" gutterBottom>
                Try Saying
            </Typography>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select>
                    <MenuItem value="Income">Income</MenuItem>
                    <MenuItem value="Expense">Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select>
                    <MenuItem value="Business">Business</MenuItem>
                    <MenuItem value="Salary">Salary</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <TextField type="number" label="Amount" fullWidth/>
        </Grid>
        <Grid item xs={6}>
            <TextField type="date" label="Date" fullWidth/>
        </Grid>
        <Button className={classes.button} variant="outlined" color="primary" fullWidth>Create</Button>
    </Grid>
  )
}

export default Form