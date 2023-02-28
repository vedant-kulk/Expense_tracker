import React from 'react'
import {Card,CardHeader,CardContent,Typography} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import use from './style';
import useTransaction from '../../useTransaction';

const Details=(props)=> {
    const classes = use();
    const {total,chartData}=useTransaction(props.title);
  return (
    <Card className={props.title==="Income"?classes.income:classes.expense}>
        <CardHeader title={props.title}/>
        <CardContent>
            <Typography variant="h5">Rs{total}</Typography>
            <Doughnut data={chartData}/>
        </CardContent>
    </Card>
  )
}

export default Details