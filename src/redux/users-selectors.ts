import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";
import {UserType} from "./users-reducer";


export const getAllUsers = (state : AppStateType ) => {
    return state.usersPage.users
}

export const getIsFetching  = (state : AppStateType ) => {
    return state.usersPage.isFetching
}

export const getAllUsersSuper = createSelector( getAllUsers,  (users : Array<UserType>) => {
    return users.filter(u => true)
})

/*export const getAllUsersSuper = createSelector( getAllUsers, getIsFetching,  (users : Array<UserType>, isGFetching : boolean) => {
    return users.filter(u => true)
})*/

export const getPageSize  = (state : AppStateType ) => {
    return state.usersPage.pageSize
}

export const getTotalUserCount  = (state : AppStateType ) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage  = (state : AppStateType ) => {
    return state.usersPage.currentPage
}



export const getFollowingProgress  = (state : AppStateType ) => {
    return state.usersPage.followingInProgress
}
