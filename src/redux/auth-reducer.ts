import {type} from "os";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'

let initialAuthState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}

export type InitialAuthStateType = typeof initialAuthState
export type CombinedUsersActionType = SetUserDataType


export const authReducer = (state = initialAuthState, action: CombinedUsersActionType): InitialAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            // console.log(state)
            // console.log(action)
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }

}

export type SetUserDataType = {
    type: typeof SET_USER_DATA
    data: {
        userId: number | null
        email: string | null
        login: string | null
        isAuth: boolean
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataType => ({
    type: SET_USER_DATA,
    data: {
        userId, email, login, isAuth
    }
})

export const getAuthUser = () => {
    return (dispatch: Dispatch) => {
        return usersAPI.authMe()
            //@ts-ignore
            .then(data => {
                if (data.resultCode === 0) {
                    //@ts-ignore
                    let {login, email, id: userId} = data.data
                    dispatch(setAuthUserData(userId, email, login, true))
                }
            });
    }
}
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    usersAPI.login(email, password, rememberMe)
        //@ts-ignore
        .then(data => {
            if (data.resultCode === 0) {
                //@ts-ignore
                dispatch(getAuthUser())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : "Some error"
                if (message) {
                    dispatch(stopSubmit("login", {_error: message}))
                }
            }
        });
}

export const logout = () => (dispatch: any) => {
    usersAPI.logout()
        //@ts-ignore
        .then(data => {
            if (data.resultCode === 0) {
                //@ts-ignore
                /*let {login, email, id: userId} = data.data*/
                /*dispatch(getAuthUser())*/
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}