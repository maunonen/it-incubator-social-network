import React from 'react'
import {connect} from "react-redux";
import {CombinedUsersActionType, followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import UsersC from "./UsersC";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

export type MapStateToPropsUsersType = {
    users : Array<UserType>
}

export type MapDispatchToPropsUsersType = {
    follow : ( userId : number) => void
    unfollow : ( userId : number ) => void
    setUsers : (user : Array<UserType>) => void
}

let mapStateToProps = (state : AppStateType) : MapStateToPropsUsersType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch : Dispatch<CombinedUsersActionType>) : MapDispatchToPropsUsersType  => {
    return {
        follow : (userId : number) => {
            dispatch(followAC(userId))
        },
        unfollow : (userId : number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers : (users : Array<UserType> ) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect<MapStateToPropsUsersType, MapDispatchToPropsUsersType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersC);