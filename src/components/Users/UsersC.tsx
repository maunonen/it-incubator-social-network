import React from 'react'
import styles from './users.module.css'
import * as axios from "axios";
import {MapDispatchToPropsUsersType, MapStateToPropsUsersType} from "./UsersContainer";

export type CombinedPropsType = MapStateToPropsUsersType & MapDispatchToPropsUsersType

class UsersC extends React.Component<CombinedPropsType> {

    /*constructor(props : CombinedPropsType) {
        super(props);
    }*/


    componentDidMount() {
        //@ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers([...response.data.items])
            this.props.setTotalUsersCount(response.data.totalCount)
            console.log(response.data)
        });
    }

    onPageChanged = (pageNumber : number) => {
        this.props.setCurrentPage(pageNumber)
        //@ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers([...response.data.items])
            console.log(response.data.items)
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages : Array<number> = []
        for (let i = 1 ; i <= pagesCount ; i++ ){
            pages.push(i)
        }
        return (
            <div>
                <div>
                    { pages.map(p => {
                        return <span
                            onClick={() => { this.onPageChanged(p) }}
                            className={this.props.currentPage === p ? styles.selected : undefined }>{p}</span>
                    })}
                </div>
                {   this.props.users &&
                    this.props.users.map(u =>
                        <div key={u.id}>
                        <span>
                            <div>
                                <img
                                    src={ u.photos?.small ? "https://picsum.photos/200/202": "https://picsum.photos/200/201"}
                                    className={styles.userPhoto}
                                />
                            </div>
                            <div>
                                {u.followed ? <button
                                        onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}>
                                        Unfollow</button>
                                    : (<button onClick={() => {
                                        this.props.follow(u.id)
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


}

export default UsersC;