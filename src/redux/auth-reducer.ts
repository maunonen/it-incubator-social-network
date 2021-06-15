import {type} from "os";

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
            console.log(state)
            console.log(action)
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }

}

export type SetUserDataType = {
    type: typeof SET_USER_DATA
    data: {
        userId: number
        email: string
        login: string
    }
}

export const setAuthUserData = (userId: number, email: string, login: string): SetUserDataType => ({
    type: SET_USER_DATA,
    data: {
        userId, email, login,
    }
})

