import React from 'react'
import styles from './users.module.css'
import {MapDispatchToPropsUsersType, MapStateToPropsUsersType} from "./UsersContainer";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from 'react-router-dom';
import * as axios from "axios";

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
                                        //@ts-ignore
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "2b182661-e190-4de5-9b14-eb5b65f7ac8a"
                                            }
                                            //@ts-ignore
                                        }).then(response => {
                                            console.log(response.data)
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        }).catch((err: any) => {
                                            console.log(err)
                                        });
                                    }}>Unfollow</button>
                                    : (<button onClick={() => {

                                        //@ts-ignore
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "2b182661-e190-4de5-9b14-eb5b65f7ac8a"
                                                }
                                            }
                                            //@ts-ignore
                                        ).then(response => {
                                            console.log(response.data)
                                            if ( response.data.resultCode === 0) {
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