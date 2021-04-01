import React from 'react';
import classes from './Dialogs.module.css'
import Navbar from "../Navbar/Navbar";
import {NavLink} from 'react-router-dom';

type DialogsType = {}

type DialogType = {}

type DialogItemType = {
    name : string
    id : number
}

type MessageType = {
    message : string
}

const Message = (props : MessageType ) => {
    return (
        <div className={classes.message}>Hi</div>
    )
}

const DialogItem = ( props : DialogItemType ) => {
    let path = "/dialogs/1" + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={ path }>{ props.name }</NavLink>
        </div>
    )

}

const Dialogs = (props: DialogsType) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem
                    id={1}
                    name={"Alex"}
                />
                <DialogItem
                    id={2}
                    name={"Jenny"}
                />
                <DialogItem
                    id={3}
                    name={"Mikko"}
                />
                <DialogItem
                    id={4}
                    name={"Jari"}
                />

            </div>
            <div className={classes.messages}>
                <Message message={"Hello"}/>
                <Message message={"how are you"}/>
                <Message message={"Yo"}/>
            </div>
        </div>
    )
}
export default Dialogs