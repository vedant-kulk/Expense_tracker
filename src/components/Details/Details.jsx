import React from 'react'
import {Card,CardHeader,CardContent,Typography} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import use from './style';
const Details=(props)=> {
    const classes = use();
     
  return (
    <Card className={props.title==="Income"?classes.income:classes.expense}>
        <CardHeader title={props.title}/>
        <CardContent>
            <Typography variant="h5">Rs 50</Typography>
            {/* <Doughnut data="DATA"/> */}
        </CardContent>
    </Card>
  )
}

export default Details