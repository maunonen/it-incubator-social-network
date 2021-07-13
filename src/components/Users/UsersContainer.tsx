import React from 'react'
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Users, {OwnUsersPropsType} from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getAllUsers, getAllUsersSuper,
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount
} from "../../redux/users-selectors"


export type MapStateToPropsUsersType = {
    users:  UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress : Array<number>
}

export type MapDispatchToPropsUsersType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
export type CombinedContainerUsersPropsType = MapStateToPropsUsersType & MapDispatchToPropsUsersType

class UsersContainer extends React.Component<CombinedContainerUsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // //@ts-ignore
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.setUsers([...data.items])
        //     this.props.toggleIsFetching(false)
        //     // console.log('Users data', data.items)
        // });
        
    }

    render() {
        return <>
            {
                this.props.isFetching ?
                    <Preloader/>
                    : null
            }
            <Users
                getUsers={this.props.getUsers}
                followingInProgress={this.props.followingInProgress}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize} users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                follow={this.props.follow}
                setCurrentPage={this.props.setCurrentPage}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>


    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsUsersType => {
    return {
        //users: state.usersPage.users,
        //users: getAllUsers(state),
        users: getAllUsersSuper(state),
        /*pageSize: state.usersPage.pageSize,*/
        pageSize: getPageSize(state),
        /*totalUsersCount: state.usersPage.totalUsersCount,*/
        totalUsersCount: getTotalUserCount(state),
        //currentPage: state.usersPage.currentPage,
        currentPage: getCurrentPage(state),
        //isFetching: state.usersPage.isFetching,
        isFetching: getIsFetching(state),
        //followingInProgress : state.usersPage.followingInProgress
        followingInProgress : getFollowingProgress(state)
    }
}

export default connect<MapStateToPropsUsersType, MapDispatchToPropsUsersType, {}, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
})(UsersContainer);