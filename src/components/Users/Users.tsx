import React from 'react'
import styles from './users.module.css'
import * as axios from "axios";

let Users = (props: any) => {

    let getUsers = () => {
        // @ts-ignore
        /*axios.get("https://social-network.samuraijs.com/users").then(response => {
            props.setUsers([...response.data.items])
        });*/
    }

    // @ts-ignore
    // if (props.users.length === 0) {
    //     props.setUsers(
    //         [
    //             {
    //                 id: 1,
    //                 photoUrl: 'https://picsum.photos/200/300',
    //                 followed: false,
    //                 fullName: 'Alex',
    //                 status: 'online',
    //                 location: {
    //                     city: 'Minsk',
    //                     country: 'Belarus'
    //                 },
    //
    //             },
    //             {
    //                 id: 2,
    //                 photoUrl: 'https://picsum.photos/200/300',
    //                 followed: true,
    //                 fullName: 'Jenny',
    //                 status: 'offline',
    //                 location: {
    //                     city: 'Moscow',
    //                     country: 'Russia'
    //                 },
    //             },
    //         ]
    //     )
    //
    // }

    props.users.forEach(u => {
        console.log(u.photos.small)
    })
    return (
        <div>
            {
                // @ts-ignore
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small ? u.photos.small : "https://picsum.photos/200/201"}
                                     className={styles.userPhoto}/>
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
                                    <div>{u.fullName && u.fullName}</div>
                                    <div>{u.status && u.status}</div>
                                </span>
                            {
                                u.location &&
                                <span>
                                    <div>{u.location.country && u.location.country}</div>
                                    <div>{u.location.city && u.location.city}</div>
                                </span>
                            }
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users;