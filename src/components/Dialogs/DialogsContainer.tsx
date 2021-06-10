import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state : any) => {
    return {
        dialogsPage: state.dialogsPage,
        dialogs : state.dialogsPage
    }
}

let mapDispatchToProps  = (dispatch : any ) => {
    return {
        updateNewMessageBody : ( body : string ) => {
            dispatch(updateNewMessageActionCreator( body))
        },
        sendMessage : (body : string ) => {
            dispatch(sendMessageActionCreator( body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer