import React, {} from 'react';
import Dialogs, {OwnPropsType} from "./Dialogs";
import {
    CombinedDialogActionType,
    DialogType, InitialDialogsStateType,
    MessageType,
    sendMessageActionCreator,

} from "../../redux/dialogs-reducer";
import {compose, Dispatch} from 'redux'
import {connect }  from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";




export type MapStateToPropsDialogsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    isAuth : boolean
}

export type MapDispatchToPropsDialogsType = {
    sendMessage : (newMessageBody : string) => void
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

let mapStateToProps = (state : AppStateType): MapStateToPropsDialogsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth : state.auth.isAuth
    }
}

let mapDispatchToProps  = (dispatch : Dispatch<CombinedDialogActionType>) : MapDispatchToPropsDialogsType => {
    return {
        sendMessage : (newMessageBody : string) => {
            dispatch(sendMessageActionCreator( newMessageBody))
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