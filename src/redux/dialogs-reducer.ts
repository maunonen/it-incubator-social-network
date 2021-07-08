import {stat} from "fs";
import {type} from "os";

/*const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"*/
const SEND_MESSAGE = "SEND_MESSAGE"

export type DialogType = {
    id: number
    message: string
}
export type MessageType = {
    id: number
    message: string
}

let initialDialogsState = {
    dialogs: [
        {id: 1, message: 'Hello'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Yo'}
    ] as Array<MessageType>,
    /*newMessageBody: 'it-kamasutra'*/
}

export type InitialDialogsStateType = typeof initialDialogsState

export type CombinedDialogActionType = SendMessageCreatorActionType

export const dialogsReducer = (state = initialDialogsState, action: CombinedDialogActionType): InitialDialogsStateType => {

    switch (action.type) {
        /*case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                /!*newMessageBody: action.body*!/
            }*/
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessageBody}],
                /*newMessageBody: '',*/
            }
        default:
            return state
    }
}

type SendMessageCreatorActionType = {
    type : typeof SEND_MESSAGE
    newMessageBody : string
}

/*type UpdateNewMessageActionCreatorType = {
    type  :typeof UPDATE_NEW_MESSAGE_BODY
    body : string
}*/

export const sendMessageActionCreator = (newMessageBody : string) : SendMessageCreatorActionType => (
    {type: SEND_MESSAGE, newMessageBody }
)
/*export const updateNewMessageActionCreator = (body: string) : UpdateNewMessageActionCreatorType => (
    {type: UPDATE_NEW_MESSAGE_BODY, body: body})*/

