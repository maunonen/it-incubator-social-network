import React from 'react'
import styles from './users.module.css'

let Users = (props: any) => {
    // @ts-ignore
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://picsum.photos/200/300',
                    followed: false,
                    fullName: 'Alex',
                    status: 'online',
                    location: {
                        city: 'Minsk',
                        country: 'Belarus'
                    },

                },
                {
                    id: 2,
                    photoUrl: 'https://picsum.photos/200/300',
                    followed: true,
                    fullName: 'Jenny',
                    status: 'offline',
                    location: {
                        city: 'Moscow',
                        country: 'Russia'
                    },
                },
            ]
        )

    }

    return (
        <div>
            {
                // @ts-ignore
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photoUrl} className={styles.userPhoto}/>
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

export default Users;