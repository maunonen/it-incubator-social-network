import React from 'react'
import styles from './users.module.css'
import {MapDispatchToPropsUsersType, MapStateToPropsUsersType} from "./UsersContainer";
import {UserType} from "../../redux/users-reducer";

export type OwnUsersPropsType = {
    onPageChanged: (pageNumber: number) => void
}

export type CombinedUsersPropsType = MapStateToPropsUsersType & MapDispatchToPropsUsersType & OwnUsersPropsType

const Users = (props: CombinedUsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        onClick={() => {
                            props.onPageChanged(p)
                        }}
                        className={props.currentPage === p ? styles.selected : undefined}>{p}</span>
                })}
            </div>
            {
                props.users &&
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img
                                    src={u.photos?.small ? "https://picsum.photos/200/202" : "https://picsum.photos/200/201"}
                                    className={styles.userPhoto}
                                />
                            </div>
                            <div>
                                {u.followed ? <button
                                        onClick={() => {
                                            props.unfollow(u.id)
                                        }}>
                                        Unfollow</button>
                                    : (<button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>)}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location?.country}</div>
                                <div>{u.location?.city}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users;