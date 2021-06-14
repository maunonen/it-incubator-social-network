import React from 'react'
import {connect} from "react-redux";
import {
    CombinedUsersActionType,
    followAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import * as axios from "axios";
import Users, {OwnUsersPropsType} from "./Users";


export type MapStateToPropsUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type MapDispatchToPropsUsersType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (user: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}
export type CombinedContainerUsersPropsType = MapStateToPropsUsersType & MapDispatchToPropsUsersType

class UsersContainer extends React.Component<CombinedContainerUsersPropsType> {

    componentDidMount() {
        //@ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers([...response.data.items])
            this.props.setTotalUsersCount(response.data.totalCount)
            console.log(response.data)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        //@ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers([...response.data.items])
            console.log(response.data.items)
        });
    }

    render() {
        return <Users
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize} users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            follow={this.props.follow}
            setCurrentPage={this.props.setCurrentPage}
            setTotalUsersCount={this.props.setTotalUsersCount}
            setUsers={this.props.setUsers}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}
        />
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsUsersType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch<CombinedUsersActionType>): MapDispatchToPropsUsersType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default connect<MapStateToPropsUsersType, MapDispatchToPropsUsersType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(UsersContainer);