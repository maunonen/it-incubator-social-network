import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state : any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps  = (dispatch : any ) => {
    return {
        updateNewMessageBody : () => {
            dispatch(sendMessageActionCreator())
        },
        sendMessage : (body : any) => {
            dispatch(updateNewMessageActionCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer