import React,{useContext} from 'react'
import {Card,CardHeader,CardContent,Typography,Grid,Divider} from '@material-ui/core';
import useStyle from './style';
import Form from './Form/Form';
import List from './List/List';
import { ExpenseTrackerContext } from '../../context/context';

const Main = () => {
    const classes=useStyle();
    const {balance}=useContext(ExpenseTrackerContext);
  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Created by Vedant"/>
        <CardContent>
            <Typography align="center" variant="h5">Total Balance {balance}</Typography>
            {/* <Typography align="center" variant="su8bstitle1" style={{lineHeight: '1.5em',marginTop:'20px'}}>Try Saying</Typography> */}
            <Divider/>
            <Form/>
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List/>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  );
}

export default Main