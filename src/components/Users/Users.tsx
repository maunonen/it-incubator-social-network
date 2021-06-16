import React from 'react'
import styles from './users.module.css'
import {MapDispatchToPropsUsersType, MapStateToPropsUsersType} from "./UsersContainer";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import * as axios from "axios";
import {usersAPI} from "../../api/api";

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
                                <NavLink to={'/profile/' + u.id}>
                                    <img
                                        src={u.photos?.small ? "https://picsum.photos/200/202" : "https://picsum.photos/200/201"}
                                        className={styles.userPhoto}
                                    />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        usersAPI.follow(u.id)
                                            //@ts-ignore
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                            }).catch((err: any) => {
                                            console.log(err)
                                        });
                                    }}>Unfollow</button>
                                    : (<button onClick={() => {
                                        usersAPI.unfollow(u.id)
                                            //@ts-ignore
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                            }).catch((err: any) => {
                                            console.log(err)
                                        });
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