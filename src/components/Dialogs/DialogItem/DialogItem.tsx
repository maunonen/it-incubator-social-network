import React from 'react';
import classes from '../../Dialogs/Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogType} from "../../../redux/state";

/*export type DialogItemType = {
    name : string
    id : number
}*/

const DialogItem : React.FC<DialogType>= ( props ) => {
    let path = "/dialogs/1" + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{ props.name }</NavLink>
        </div>
    )

}


export default DialogItem