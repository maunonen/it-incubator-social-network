import {AppStateType} from "./redux-store";

export const getAllUsers = (state : AppStateType ) => {
    return state.usersPage.users
}

export const getPageSize  = (state : AppStateType ) => {
    return state.usersPage.pageSize
}

export const getTotalUserCount  = (state : AppStateType ) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage  = (state : AppStateType ) => {
    return state.usersPage.currentPage
}

export const getIsFetching  = (state : AppStateType ) => {
    return state.usersPage.isFetching
}

export const getFollowingProgress  = (state : AppStateType ) => {
    return state.usersPage.followingInProgress
}
