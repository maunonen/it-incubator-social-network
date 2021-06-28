import React, {} from 'react';
import Dialogs, {OwnPropsType} from "./Dialogs";
import {
    CombinedDialogActionType,
    DialogType, InitialDialogsStateType,
    MessageType,
    sendMessageActionCreator,
    updateNewMessageActionCreator
} from "../../redux/dialogs-reducer";
import {compose, Dispatch} from 'redux'
import {connect }  from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {component} from "../../js/lesson1";



export type MapStateToPropsDialogsType = {
    // dialogsPage?: Array<InitialDialogsStateType>
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody : string
    isAuth : boolean
}

export type MapDispatchToPropsDialogsType = {
    updateNewMessageBody : (body : string ) => void
    sendMessage : () => void
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

let mapStateToProps = (state : AppStateType): MapStateToPropsDialogsType => {
    return {
        // dialogsPage: state.dialogsPage,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth : state.auth.isAuth
    }
}

let mapDispatchToProps  = (dispatch : Dispatch<CombinedDialogActionType>) : MapDispatchToPropsDialogsType => {
    return {
        updateNewMessageBody : ( body : string ) => {
            dispatch(updateNewMessageActionCreator( body))
        },
        sendMessage : () => {
            dispatch(sendMessageActionCreator( ))
        }
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsDialogsType, MapDispatchToPropsDialogsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

// in case we don't have own props put emty object {}
// const DialogsContainer = connect<MapStateToPropsDialogsType, MapDispatchToPropsDialogsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);
// const DialogsContainer = connect<MapStateToPropsDialogsType, MapDispatchToPropsDialogsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer