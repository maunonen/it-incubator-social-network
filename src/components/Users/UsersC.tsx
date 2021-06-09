import React from 'react'
import styles from './users.module.css'
import * as axios from "axios";

class UsersC extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        //@ts-ignore
        axios.get("https://social-network.samuraijs.com/users").then(response => {
            this.props.setUsers([...response.data.items])
        });
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                {
                    // @ts-ignore
                    props.users.map(u =>
                        <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small !== null ? u.photos.small : "https://picsum.photos/200/300"}
                                     className={styles.userPhoto}/>
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
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
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