import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

let mapStateToProps = (state : AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
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