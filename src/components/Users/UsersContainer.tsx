import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import UsersC from "./UsersC";

let UsersContainer = () => {
    return (
        <div>
            Users
        </div>
    )
}
let mapStateToProps = (state : any) => {
    return {
        users: state.usersPage.users
    }
}


let mapDispatchToProps = (dispatch : any) => {
    return {
        follow : (userId : any) => {
            dispatch(followAC(userId))
        },
        unfollow : (userId : any) => {
            dispatch(unfollowAC(userId))
        },
        setUsers : (users : any ) => {
            dispatch(setUsersAC(users))
        }
    }
}

/*export default connect(mapStateToProps, mapDispatchToProps)(Users);*/
export default connect(mapStateToProps, mapDispatchToProps)(UsersC);