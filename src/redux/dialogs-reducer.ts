import {stat} from "fs";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

let initialDialogsState = {
    dialogs: [
        {id: 1, message: 'Hello', likesCount: 12}],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Yo'}
    ],
    newMessageBody: 'it-kamasutra'
}

export const dialogsReducer = (state = initialDialogsState, action: any) => {

    switch (action.type) {
        case action.type === UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            }
        case action.type === SEND_MESSAGE:
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: state.newMessageBody}]
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageActionCreator = (body: any) => (
    {type: UPDATE_NEW_MESSAGE_BODY, body: body})

