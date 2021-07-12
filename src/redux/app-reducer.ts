import {type} from "os";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {getAuthUser} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialAuthState = {
    initialized: false,
}

export type InitialAuthStateType = typeof initialAuthState
export type CombinedUsersActionType = SetUserDataType


export const appReducer = (state = initialAuthState, action: CombinedUsersActionType): InitialAuthStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }

}

export type SetUserDataType = {
    type: typeof INITIALIZED_SUCCESS
}

export type InitiliazeThunkType = {}

export const initializedSuccess = (): SetUserDataType => ({
    type: INITIALIZED_SUCCESS,
})

export const initiliazeApp = () => {
    return (dispatch: Dispatch) => {
        //@ts-ignore
        let promise = dispatch(getAuthUser())
        /*let promise2 = dispatch(getAuthUser1())
        let promise3 = dispatch(getAuthUser1())*/
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    };
}
