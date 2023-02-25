import React from 'react';
import {List as MUIList,ListItem,ListItemAvatar,ListItemText,Avatar,ListItemSecondaryAction,IconButton,Slide} from '@material-ui/core';
import {Delete,MoneyOff} from '@material-ui/icons';
import UseStyle from './style';
const List = () => {
    const classes=UseStyle();
    const transactions=[
        {id:1,type:"Income",category:"Salary",amount:50,date:new Date()},
        {id:1,type:"Income",category:"Saf",amount:50,date:new Date()},
        {id:1,type:"Income",category:"S",amount:50,date:new Date()}
    ]; 
  return (
    <MUIList dense={false} className={classes.list}>
        {transactions.map((transaction)=>(
            <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={transaction.type==="Income"?classes.avatarIncome:classes.avatarExpense}>
                            <MoneyOff/>

                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.category} secondary={`Rs ${transaction.amount} - ${transaction.date}`}  />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onclick="">
                            <Delete/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Slide>
        ))}
    </MUIList>
  )
}

export default List