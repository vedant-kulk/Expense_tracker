import React from 'react'
import {Card,CardHeader,CardContent,Typography,Grid,Divider} from '@material-ui/core';
import useStyle from './style';

const Main = () => {
    const classes=useStyle();
  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Created by Vedant"/>
        <CardContent>
            <Typography align="center" variant="h5">Total Balance 100 Rs</Typography>
            <Typography align="center" variant="su8bstitle1" style={{lineHeight: '1.5em',marginTop:'20px'}}>Try Saying</Typography>
            <Divider/>
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>

                </Grid>
            </Grid>

        </CardContent>
    </Card>
  );
}

export default Main