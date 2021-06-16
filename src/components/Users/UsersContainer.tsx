import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import Users, {OwnUsersPropsType} from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


export type MapStateToPropsUsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type MapDispatchToPropsUsersType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (user: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type CombinedContainerUsersPropsType = MapStateToPropsUsersType & MapDispatchToPropsUsersType

class UsersContainer extends React.Component<CombinedContainerUsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        console.log("Fetching data")
        //@ts-ignore
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers([...data.items])
            this.props.setTotalUsersCount(data.totalCount)
            console.log('Users data DidMount', data)
        }).catch((err: any) => {
            console.log(err)
            this.props.toggleIsFetching(false)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        //@ts-ignore
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers([...data.items])
            this.props.toggleIsFetching(false)
            console.log('Users data', data.items)
        });
    }

    render() {
        return <>
            {
                this.props.isFetching ?
                    <Preloader/>
                    : null
            }
            <Users
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize} users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                follow={this.props.follow}
                setCurrentPage={this.props.setCurrentPage}
                setTotalUsersCount={this.props.setTotalUsersCount}
                setUsers={this.props.setUsers}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                isFetching={this.props.isFetching}
                toggleIsFetching={this.props.toggleIsFetching}
            />
        </>


    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsUsersType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect<MapStateToPropsUsersType, MapDispatchToPropsUsersType, {}, AppStateType>(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer);