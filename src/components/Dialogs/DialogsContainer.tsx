import React from 'react';
import Dialogs, {OwnPropsType} from "./Dialogs";
import {
    DialogType, InitialDialogsStateType,
    MessageType,
    sendMessageActionCreator,
    updateNewMessageActionCreator
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";



export type MapStateToPropsDialogsType = {
    // dialogsPage?: Array<InitialDialogsStateType>
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type MapDispatchToPropsDialogsType = {
    updateNewMessageBody : (body : string ) => void
    sendMessage : (body : string ) => void
}

let mapStateToProps = (state : AppStateType): MapStateToPropsDialogsType => {
    return {
        // dialogsPage: state.dialogsPage,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

let mapDispatchToProps  = (dispatch : any ) : MapDispatchToPropsDialogsType => {
    return {
        updateNewMessageBody : ( body : string ) => {
            dispatch(updateNewMessageActionCreator( body))
        },
        sendMessage : (body : string ) => {
            dispatch(sendMessageActionCreator( body))
        }
    }
}

// in case we don't have own props put emty object {}
// const DialogsContainer = connect<MapStateToPropsDialogsType, MapDispatchToPropsDialogsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);
const DialogsContainer = connect<MapStateToPropsDialogsType, MapDispatchToPropsDialogsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer